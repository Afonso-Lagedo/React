import React from 'react';
import {formatRelative} from 'date-fns'//to format date
import {ptBR} from 'date-fns/locale';//to localization

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
            <p className="data">{formatRelative(props.data, new Date(), { locale:ptBR})}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
        <br/><br/>
    </div>
);

export default Comentario;