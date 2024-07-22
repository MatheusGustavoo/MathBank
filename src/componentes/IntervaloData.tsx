import React from "react";
import InputData from "./InputData";
import { useData } from "../utils/DataContext";

const IntervaloData = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form
      className="box flex"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <InputData
        label="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <InputData
        label="final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default IntervaloData;
