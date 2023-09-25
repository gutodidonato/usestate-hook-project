import React, { useState } from "react";
function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [tempo, atualizar] = useState(time);

  function atualizarHora() {
    atualizar(new Date().toLocaleTimeString());
  }

  setInterval(atualizarHora, 1000);

  return (
    <div className="container">
      <h1>{tempo}</h1>
      <button onClick={atualizarHora}>Get Time</button>
    </div>
  );
}

export default App;
