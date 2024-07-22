import React from "react";
import { useData } from "../utils/DataContext";
import VendaItem from "../componentes/VendaItem";
const Vendas = () => {
  const { data } = useData();

  if (!data) return null;
  // console.log(data);

  return (
    <ul>
      {data.map(e => (
        <li key={e.id}>
          <VendaItem venda={e} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
