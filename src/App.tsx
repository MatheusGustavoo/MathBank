import "./app.css";
import Header from "./componentes/Header";
import Navegacao from "./componentes/Navegacao";
import Resumo from "./paginas/Resumo";
import Vendas from "./paginas/Vendas";
import { DadosContexto } from "./utils/DataContext";
function App() {
  return (
    <DadosContexto>
      <div className="container">
        <Navegacao></Navegacao>
        <main>
          <Header></Header>
          <Resumo></Resumo>
          <Vendas></Vendas>
        </main>
      </div>
    </DadosContexto>
  );
}

export default App;
