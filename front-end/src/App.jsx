import { Header } from "./componentes/Header.jsx";
import { Inicio } from "./componentes/Inicio.jsx";
import { Sobre } from "./componentes/Sobre.jsx";
import { Projetos } from "./componentes/Projetos.jsx";
import { Habilidades } from "./componentes/Habilidades.jsx";
import { Contato } from "./componentes/Contato.jsx";

function App() {
  return (
    <>
      <Header />
      <Inicio />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Contato />
    </>
  );
}

export default App;