import React, { Key, PureComponent } from "react";
import useFetch from "../Hooks/useFetch";

type IProduto = {
  id: string;
  nome: string;
  preco: number;
  status: "processando" | "pago" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};
type IContexto = {
  data: IProduto | null;
  loading: boolean;
  error: string | null;
};

const Contexto = React.createContext<IContexto | null>(null);

export const DadosContexto = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IProduto>(
    "https://data.origamid.dev/vendas/"
  );
  return (
    <Contexto.Provider value={{ data, loading, error }}>
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
