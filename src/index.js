import './index.css' //Quero apenas que nossa aplicação seja capaz de encontra esse arquivo, todos os import que for fazer  relacionado a css vai ser dessa forma, referencia o arquivo
import ReactDOM from 'react-dom'; // Posso coloca a variavel que eu quiser no ReactDOM
import React from 'react';

// import Primeiro from './components/basicos/Primeiro'
// import ComParametro from './components/basicos/ComParametro'
// import Fragmento from './components/basicos/Fragmento'
import App from './App'

//Propiedades são leituras e não pode ser trocadas
ReactDOM.render(
    <App />,
    // <div id="app">
    //     <Primeiro></Primeiro>
    //     <ComParametro
    //         titulo="Segundo Componente"
    //         aluno="Alex"
    //         nota={9.3} />
    //     <Fragmento />
    // </div>, //Sintaxi JSX
    document.getElementById('root')
);