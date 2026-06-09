import Header from "./components/Header";
import Nav from "./components/Nav";
import ListaProyectos from "./views/ListaProyectos";
import Footer from "./components/Footer";
import Dashboard from "./views/Dashboard";
import DetalleProyecto from "./views/DetalleProyecto";
import PerfilUsuario from "./views/PerfilUsuario";
import { BrowserRouter, Routes , Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      
      <main className="contenedorPrincipal">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/proyectos" element={<ListaProyectos />} />
          <Route path="/proyectos/:id" element={<DetalleProyecto/>} />
          <Route path="/perfil" element={<PerfilUsuario/>} />

          
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
