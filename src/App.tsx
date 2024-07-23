import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Navegacao from "./componentes/Navegacao";
import Resumo from "./paginas/Resumo";
import Vendas from "./paginas/Vendas";
import { DadosContexto } from "./utils/DataContext";
import Venda from "./paginas/Venda";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <DadosContexto>
        <div className="container">
          <Navegacao></Navegacao>
          <main>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DadosContexto>
    </BrowserRouter>
  );
}

export default App;
