import React from 'react';
import './Comentario.css'

//jsx
//one div for one components
/*const Comentario = () => (//for show function is in {}
    <>
        <div className="Classe">Teste Componente 2+3</div>
        <div className="Classe">Teste Componente {2+3}</div>
    </>
);*/

//for return
/*const Comentario = () => {

    const a=5;
    const b=7;

    return(
        <>
            <div className="Classe">Teste Componente 2+3</div>
            <div className="Classe">Teste Componente {2+3}</div>
            <div className="Classe">Teste Componente {a+b}</div>
        </>
    )
};*/

const Comentario = () => (//for show function is in {}
    <div className="Classe">
        <h2>Afonso</h2>
        <p>afonso.ur@gmail.com</p>
        <p>"Comentário"</p>
        <p>29/08/2021</p>
    </div>
);

export default Comentario;