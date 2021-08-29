import React, {Component} from 'react';//for save status of application, add library Component
import './App.css';

import Comentario from './components/Comentario';

class App extends Component{//class have function, function have return

  //because it is Component, it have a state(status of application)
  state = {
    //array of objects
    comentarios: [
      {
        nome:'Afonso',
        email:'afonso.ur@gmail.com',
        data:new Date (2021,8,28),
        mensagem:'Teste comentário'
      },
      {
        nome:'Felipe',
        email:'felipe@gmail.com',
        data:new Date (2021,8,29),
        mensagem:'Teste comentário2'
      }
    ]
  }

  adicionarComentario = () =>{
    console.log("Adicionando Comentário...");

    const novoComentario ={
        nome:'Rafaela',
        email:'rafaela@gmail.com',
        data:new Date (),
        mensagem:'Teste comentário3'
    }

    //let lista = this.state.comentarios;//geting comentarios
    //lista.push(novoComentario);//add comentario
    //this.setState({comentarios:lista})//state update

    //or with sprad
    this.setState({comentarios: [...this.state.comentarios, novoComentario]})
  }

  render() {//from library Component
    return (
      <div className="App">
        <h1>Comentários</h1>
        {
          this.state.comentarios.map((comentario, indice)=>(
            <Comentario 
              key={indice}//each components have identification unique 
              nome={comentario.nome} 
              email={comentario.email} 
              data={comentario.data}>
              {comentario.mensagem}
            </Comentario>
          ))
        }
        <button onClick={this.adicionarComentario}>Adicionar comentário</button>
      </div>
    );
  }

}

export default App;
