import React from 'react';
import './App.css';

import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Comentários</h1>
      <Comentario/>
      <Comentario/>
    </div>
  );
}

export default App;
