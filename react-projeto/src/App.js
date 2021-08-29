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
    ],
    novoComentario:{
      nome:'',
      email:'',
      mensagem:''
    }
  }

  adicionarComentario = evento =>{
    console.log("Adicionando Comentário...");

    evento.preventDefault();//for event annull
    const novoComentario = {...this.state.novoComentario, data: new Date()};//pick up from state of novoComentario plus actualy date
    this.setState({comentarios: [...this.state.comentarios, novoComentario],
    novoComentario: {nome:'', email:'', mensagem:''}//update field, after add
    })
  }

  removerComentario = comentario =>{
    let lista = this.state.comentarios; //lista receives comentarios
    lista = lista.filter(a => a !== comentario)// filter all who are not equals the comentario
    this.setState({comentarios: lista})
  }

  editaInput = evento => {
    const {name, value} = evento.target;
    //field update with value
    this.setState({novoComentario: {...this.state.novoComentario, [name]:value}});
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
              data={comentario.data}
              //bind to call the class function
              onRemove={this.removerComentario.bind(this, comentario)}>
              {comentario.mensagem}
            </Comentario>
          ))
        }

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.editaInput}
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.editaInput}
              placeholder="Digite seu email"
            />
          </div>

          <div>
            <textarea
              name="mensagem"
              value={this.state.novoComentario.mensagem}
              onChange={this.editaInput}
              rows="4"
            />
          </div>

          <button type="submit">Adicionar comentário</button>

        </form>

      </div>
    );
  }

}

export default App;
