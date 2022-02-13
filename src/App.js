import React from 'react';


import Menu from './templates/principal/MenuLateral';

const user = {
  saldo: 18231.24,
}

function App() {
  return (
    <div className="App">
      <Menu user={user}/>
    </div>
  );
}

export default App;
