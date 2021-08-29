import React from 'react';
import './Comentario.css'

//jsx

const Comentario = props => (//for get properties
    //toString() for non-String properties
    //props.children for inside elements
    <div className="Classe">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
    </div>
);

export default Comentario;