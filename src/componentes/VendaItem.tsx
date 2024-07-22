import React from "react";
import { IProduto } from "../utils/DataContext";

const VendaItem = ({ venda }: { venda: IProduto }) => {
  return (
    <div className="venda box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {venda.id}
      </a>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default VendaItem;
