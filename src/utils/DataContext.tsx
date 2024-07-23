import React, { Key, PureComponent } from "react";
import useFetch from "../Hooks/useFetch";

export type IProduto = {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};
type IContexto = {
  data: IProduto[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

const Contexto = React.createContext<IContexto | null>(null);

const dataAtual = (n: number) => {
  const data = new Date();
  data.setDate(data.getDate() - n);
  const dd = String(data.getDate()).padStart(2, "0");
  const mm = String(data.getMonth() + 1).padStart(2, "0");
  const yyyy = String(data.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
};

export const DadosContexto = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(dataAtual(30));
  const [final, setFinal] = React.useState(dataAtual(0));

  const { data, loading, error } = useFetch<IProduto[]>(
    `${import.meta.env.VITE_URL}=${inicio}&final=${final}`
  );

  return (
    <Contexto.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </Contexto.Provider>
  );
};

export const useData = () => {
  const useContexto = React.useContext(Contexto);
  if (!useContexto) {
    throw new Error("useData precisar estar em DataContextProvider");
  }
  return useContexto;
};
