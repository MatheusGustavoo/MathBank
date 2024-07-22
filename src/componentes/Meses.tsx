import React from "react";
import MesesBtn from "./MesesBtn";

const Meses = () => {
  return (
    <div className="flex">
      <MesesBtn n={-3}></MesesBtn>
      <MesesBtn n={-2}></MesesBtn>
      <MesesBtn n={-1}></MesesBtn>
      <MesesBtn n={0}></MesesBtn>
    </div>
  );
};

export default Meses;
