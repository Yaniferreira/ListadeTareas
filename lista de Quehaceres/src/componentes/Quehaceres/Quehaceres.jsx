import React from 'react';
import '../App/App.css';

const Quehaceres = (props) => {
    const { texto, completada } = props.quehaceres;

    const togglePendienteCompletado = () => {
        props.togglePendienteCompletado(props.quehaceres);
    }

    const eliminarPendienteDeLaLista = () => {
        props.eliminarPendienteDeLaLista(texto);
    }

    return (
        <div className='quehaceres'>
            <label className="custom-checkbox">
                <input
                    type="checkbox"
                    checked={completada}
                    onChange={togglePendienteCompletado}
                />
                <span className="checkmark"></span>
            </label>
            <h3
                style={{
                    textDecoration: completada ? 'line-through' : 'none',
                    textDecorationColor: completada ? 'black' : 'transparent'
                }}
            >
                {texto}
            </h3>
            <button className='btnEliminar' onClick={eliminarPendienteDeLaLista}>Eliminar pendiente</button>
        </div>
    );
}

export default Quehaceres;

