import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./components/ListaProyectos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      
      <main className="contenedorPrincipal">
        <ListaProyectos /> 
      </main>

      <Footer />
    </>
  );
}

export default App;
