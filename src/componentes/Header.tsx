import React from "react";
import { useData } from "../utils/DataContext";
import IntervaloData from "./IntervaloData";
import Meses from "./Meses";

const Header = () => {
  const { data } = useData();

  return (
    <div className="mb">
      <div className="mb">
        <IntervaloData />
      </div>
      <Meses />
    </div>
  );
};

export default Header;
