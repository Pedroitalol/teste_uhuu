import React, { useEffect, useState } from 'react'
import api from './class/api'

function App() {
  
  const [entregas, setEntregas] = useState("");
  const [error, setError] = useState("");
  
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/api/cliente', {method: 'GET'});
      const status = await response.status;
      if(status === 200){
        const novaEntregas = await response.json();
        setEntregas(novaEntregas);
      }else{
        alert('deu uma merda ai');
        setEntregas([]);
      }
      
      
    })()
  }, []);

  console.log(entregas);
  console.log(error);
  return (
    <div className="App" id="root">
      {MyForm()}
    </div>
  )
}

function MyForm() {
  const [name, setName] = useState("");
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

function componentDidMount() {
  // GET request using axios with error handling
  api.get('https://api.npms.io/v2/invalid-url')
    .then(response => setEntregas(response.data))
    .catch(error => {
      setError(error.message);
      console.error('There was an error!', error);
  });
}


export default App
