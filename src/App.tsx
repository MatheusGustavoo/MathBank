import "./app.css";
import Header from "./componentes/Header";
import Navegacao from "./componentes/Navegacao";
import Resumo from "./paginas/Resumo";
import { DadosContexto } from "./utils/DataContext";
function App() {
  return (
    <DadosContexto>
      <div>
        <Navegacao></Navegacao>
        <main>
          <Header></Header>
          <Resumo></Resumo>
        </main>
      </div>
    </DadosContexto>
  );
}

export default App;
