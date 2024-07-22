import React from "react";
import logo from "../assets/logo MathBanck.svg";
import { Gear, House, Storefront, WebhooksLogo } from "@phosphor-icons/react";
const Navegacao = () => {
  return (
    <nav className="sidenav box bg-3">
      <img src={logo} alt="" />
      <ul>
        <li>
          <span>
            <House size={25} weight="bold" />
          </span>
          <a href="">Resumo</a>
        </li>
        <li>
          <span>
            <Storefront size={25} weight="bold" />
          </span>
          <a href="">vendas</a>
        </li>
        <li>
          <span>
            <WebhooksLogo size={25} weight="bold" />
          </span>
          <a href="">webhooks</a>
        </li>
        <li>
          <span>
            <Gear size={25} weight="bold" />
          </span>
          <a href="">Configuração</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacao;
