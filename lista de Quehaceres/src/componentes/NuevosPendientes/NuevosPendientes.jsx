import React, { useState } from 'react';

const NuevosPendientes = (props) => {
    const [tarea, setTarea] = useState('');

    const agregarTarea = (e) => {
        e.preventDefault();
        if (tarea.trim() === '') return;
        const tareaNueva = {
            texto: tarea,
            completada: false
        };
        props.actualizarLista(tareaNueva);
        setTarea('');
    }

    return (
        <div>
            <form onSubmit={agregarTarea}>
                <input className='inputAgregar'
                    type='text'
                    id='nuevospendientes'
                    name='nuevospendientes'
                    placeholder='Escribe una tarea nueva'
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                />
                <button className='btnAgregar' type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default NuevosPendientes;

