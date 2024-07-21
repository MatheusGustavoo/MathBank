import React from "react";
import { useData } from "../utils/DataContext";
import IntervaloData from "./IntervaloData";

const Header = () => {
  const { data } = useData();

  return (
    <div>
      <IntervaloData></IntervaloData>
    </div>
  );
};

export default Header;
