import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IProduto } from "../utils/DataContext";
import Loading from "../componentes/Loading";

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<IProduto>(
    `https://data.origamid.dev/vendas/${id}`
  );
  console.log(loading);

  if (loading === true) return <Loading />;
  if (!data) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Forma de pagamento: {data.pagamento}</div>
      <div className="box mb">
        Preço:
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default Venda;
