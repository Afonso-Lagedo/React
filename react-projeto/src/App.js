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

  render() {//from library Component
    return (
      <div className="App">
        <h1>Comentários</h1>
        {
        //get objects in state
        /*
          this.state.comentarios.map(comentario =>//map for passing in all elements
            (console.log(comentario))
          )*/
          //or, for get position(indice)
          /*this.state.comentarios.map((comentario, indice) =>//map for passing in all elements
            (console.log(indice))
          )*/
        }

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
      </div>
    );
  }

}

export default App;
