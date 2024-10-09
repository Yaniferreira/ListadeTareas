
import './App.css';
import Quehaceres from '../Quehaceres/Quehaceres';
import NuevosPendientes from '../NuevosPendientes/NuevosPendientes';
import React, { useState } from 'react'; // Añadido: React y useState

function App() {
  const [listaDeQuehaceres, setListaDeQuehaceres] = useState([]);

  const actualizarLista = (nuevoPendiente) => {
    setListaDeQuehaceres([...listaDeQuehaceres, nuevoPendiente]);
  }

  const eliminarPendienteDeLaLista = (texto) => {
    setListaDeQuehaceres(listaDeQuehaceres.filter(quehacer => quehacer.texto !== texto)); // Cambiado "quehaceres" por "quehacer"
  }

  const togglePendienteCompletado = (tarea) => {
    const listaActualizada = listaDeQuehaceres.map(t =>
      t.texto === tarea.texto ? { ...t, completada: !t.completada } : t
    );
    setListaDeQuehaceres(listaActualizada);
  }

  return (
    <div className="App">
      <div className='App-header'>
        <NuevosPendientes actualizarLista={actualizarLista} /> {/* Cambiado Buscador por NuevosPendientes */}
        {
          listaDeQuehaceres.map((quehacer, index) => (  // Cambiado "listaTareas" por "listaDeQuehaceres" y "quehaceres" por "quehacer"
            <Quehaceres
              key={index}
              quehaceres={quehacer}  // Cambiado "quehaceres" por "quehacer"
              eliminarPendienteDeLaLista={eliminarPendienteDeLaLista}
              togglePendienteCompletado={togglePendienteCompletado}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;

