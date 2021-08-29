import React from 'react';
import './Comentario.css'
import img from './user.png';

//jsx

const Comentario = props => (//for get properties
    //toString() for non-String properties
    //props.children for inside elements
    <div className="Classe">
        <img className="imgClass" src={img} alt={props.nome}/>
        <div className="conteudo">
            <h2 className="nome">{props.nome}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
        <br/><br/>
    </div>
);

export default Comentario;