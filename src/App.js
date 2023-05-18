import React, { useState } from 'react';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);

  const buscarCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setEndereco(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CEP App</h1>
        <p>Bem-vindo ao meu aplicativo!</p>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={handleCepChange}
        />
        <button onClick={buscarCep}>Buscar</button>
        {endereco && (
          <div>
            <h2>Informações do CEP:</h2>
            <p>CEP: {endereco.cep}</p>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.localidade}</p>
            <p>Estado: {endereco.uf}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
