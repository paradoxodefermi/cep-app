import React, { useState } from "react";
import axios from "axios";

function App() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const searchCep = () => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Consulta de CEP</h1>
      <input type="text" value={cep} onChange={handleCepChange} />
      <button onClick={searchCep}>Buscar</button>

      {address && (
        <div>
          <p>CEP: {address.cep}</p>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Cidade: {address.localidade}</p>
          <p>Estado: {address.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
