import React , { useState } from "react";

// Importa o css no React
import './App.css';

const App = () => {
  const [ message, setMessage ] =  useState('Olá, mundo!');
  return (
  <>
    <div className="container">{message}</div>;
    <button onClick={()=>setMessage("Olááááááááááá!")}>Mudar Mensagen</button>  
  </>
  )
}

export default App;
