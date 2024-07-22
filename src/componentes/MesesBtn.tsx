import React from "react";
import { useData } from "../utils/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  border: "none",
  backgroundColor: "var(--color-3)",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "uppercase",
};

const nomeMes = (n: number) => {
  const data = new Date();
  data.setMonth(data.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(data);
};

const formatarDataAtual = (data: Date) => {
  const dd = String(data.getDate()).padStart(2, "0");
  const mm = String(data.getMonth() + 1).padStart(2, "0");
  const yyyy = String(data.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
};

const MesesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();
  const setMes = (n: number) => {
    const data = new Date();
    data.setMonth(data.getMonth() + n);

    const pirmeiroDia = new Date(data.getFullYear(), data.getMonth(), 1);
    const ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0);

    setInicio(formatarDataAtual(pirmeiroDia));
    setFinal(formatarDataAtual(ultimoDia));
  };
  return (
    <button
      style={style}
      onClick={() => {
        setMes(n);
      }}
    >
      {nomeMes(n)}
    </button>
  );
};

export default MesesBtn;
