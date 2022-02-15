import React from 'react';
import "./App.css"

import Menu from './templates/principal/MenuLateral';
import Inicio from './templates/menuInicial/Inicio';
import Cards from './templates/cardsTopo/Cards';

const user = {
  saldo: 18231.24,
  name : 'Martin Ferramentas',
  cnpj : "32.241.521/0001-23",
  rentabilidadeMes: 3911.95,
  boletosAberto: 7289.92,
  banco: 141,
  agencia: "0001",
  conta: 312463712-4,
  complementoNome: "LTDA"
}

function App() {
  return (
    <div className="App">
      <Menu user={user} />
      <div className='conteudo'>
        <Inicio user={user}/>
        <Cards user={user} />
      </div>
    </div>
  );
}

export default App;
