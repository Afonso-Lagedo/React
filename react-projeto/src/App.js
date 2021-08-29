import React from 'react';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Comentários</h1>
      <Comentario nome="Afonso" email="afonso.ur@gmail.com" data={new Date(2021,8,29)}>
        Teste comentário
      </Comentario>
      <Comentario nome="Felipe" email="felipe@gmail.com" data={new Date(2021,8,30)}>
        Teste comentário2
      </Comentario>
    </div>
  );
}

export default App;
