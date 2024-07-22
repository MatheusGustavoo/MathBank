import React from "react";
import { useData } from "../utils/DataContext";

const Resumo = () => {
  const { data } = useData();
  if (!data) return null;
  console.log();

  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          {data
            .filter(i => i.status !== "falha")
            .reduce((acc, atual) => acc + atual.preco, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </div>

        <div className="box">
          <h2>Pago</h2>
          {data
            .filter(i => i.status == "pago")
            .reduce((acc, atual) => acc + atual.preco, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </div>

        <div className="box">
          <h2>Processando</h2>
          {data
            .filter(i => i.status == "processando")
            .reduce((acc, atual) => acc + atual.preco, 0)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </div>
      </div>
      <div className="box mb">Graficos</div>
    </section>
  );
};

export default Resumo;
