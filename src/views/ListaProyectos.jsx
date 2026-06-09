import { useState, useEffect, useRef } from "react";

import "../css/ListasProyectos.css";
import ProyectoCard from "../components/ProyectoCard.jsx";
import DetalleProyecto from "./DetalleProyecto.jsx";
import proyectoService from "../services/proyectoService.js";
import RegistroActividad from "../components/RegistroActividad.jsx";
import FormularioProyecto from "../components/FormularioProyecto.jsx";

const ListaProyectos = () => {
    
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
     const longitudAnterior=useRef(proyectos.length)  /**/

    const [terminoBusqueda, setTerminoBusqueda] = useState("");

    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    
    const [fechaActualizacion, setFechaActualizacion] = useState("");
    
    const esPrimerRender=useRef(true);
    
    {/*punto 2 y 3*/}
    useEffect(() => {
      if (esPrimerRender.current) {
         esPrimerRender.current = false;
         return;
      }
    

     /*aislacion del filtro */
      if (terminoBusqueda !== "") {
        return;
      }
    if (proyectos.length !== longitudAnterior.current) {
    const ahora = new Date();

    let ultimaActualizacion = `${String(ahora.getDate()).padStart(2, "0")}/${String(ahora.getMonth() + 1).padStart(2, "0")}/${ahora.getFullYear()} a las ${String(ahora.getHours()).padStart(2, "0")}:${String(ahora.getMinutes()).padStart(2, "0")} hs.`;
    {/*imprime por consola cambios en proyectos ya sea eliminar, buscar o agregar proyectos*/}  
    console.log(ultimaActualizacion);
     setFechaActualizacion(ultimaActualizacion);
      longitudAnterior.current = proyectos.length;/**/
    }
   }, [proyectos, terminoBusqueda]);

    
    const handleAgregarProyecto = (datosProyectoHijo) => {
      
      const { 
        título, categoría, estado, descripcion, 
        pdf, drive, github, nombreIntegrante, rolIntegrante 
      } = datosProyectoHijo;
      
      // aqui construimos el nuevo proyecto con la estructura completa
      const nuevo = {
        id: Date.now(), 
        título,
        categoría,
        estado,
        descripcion,
        recursos: {
          pdf: pdf.trim(),
          drive: drive.trim(),
          github: github.trim()
        },
        // Si cargan un integrante, lo sumamos al arreglo si no, queda vacío
        equipo: nombreIntegrante.trim() ? [{ nombre: nombreIntegrante, rol: rolIntegrante }] : []
      };
      
      proyectoService.agregarProyecto(nuevo);
      
       // actualizamos la lista en pantalla
      setProyectos([...proyectoService.obtenerProyectos()]);
    };
      
    const handleEliminar = (id) => {
      proyectoService.eliminarProyecto(id);
       const listaActualizada = proyectoService.obtenerProyectos();
       setProyectos(listaActualizada);
      
       // Si eliminamos el proyecto  que se esta visualizando abajo, cerramos la perstaña
    if (proyectoSeleccionado && proyectoSeleccionado.id === id) {
      setProyectoSeleccionado(null);
      }
   }; 
      //Funcion para cargar el detalle buscando el objeto por ID.
    const handleVerDetalle = (id) => {
      const proyectoEncontrado = proyectoService.obtenerProyectoPorId(id);
      setProyectoSeleccionado(proyectoEncontrado);
    };
    //  funcion para cerrar la pestaña del detalle  sin recargar la pagina nuevamente.
    const handleCerrarDetalle = () => {
      setProyectoSeleccionado(null)
    };

    //(Filtra los proyectos por título según el texto ingresado en el campo de búsqueda)
    const busqueda = (e) => {
      const valor = e.target.value;
      setTerminoBusqueda(valor);
      const proyectosFiltrados = proyectoService.buscarProyecto(valor);
      setProyectos(proyectosFiltrados);
    };

  return (
    <div className="contenedor-proyectos">
        <h2>Mis Proyectos Académicos</h2>

        <FormularioProyecto onAgregar={handleAgregarProyecto} />

      <div className="seccion-busqueda">
          <input
              type="text"
              placeholder="Buscar proyecto..."
              value={terminoBusqueda}
              onChange={busqueda}
          />
      </div>
    {/* reemplazo del div anterior por el nuevo respetando la nueva estructura*/}
    <div className="grilla-proyectos">
      {proyectos.map(p => (
        <ProyectoCard 
          key={p.id} 
          proyecto={p} 
          onEliminar={handleEliminar} 
          onVerDetalle={handleVerDetalle} 
        />
      ))}
    </div>

    <div id="seccion-detalle">
      <DetalleProyecto 
      proyecto={proyectoSeleccionado}
      onCerrar={handleCerrarDetalle} 
      />
    </div>
    {fechaActualizacion &&(
    
    <RegistroActividad ultimaActualizacion = {fechaActualizacion} />
    )}
    </div>
  );
};

export default ListaProyectos;