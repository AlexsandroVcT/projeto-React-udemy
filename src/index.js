import './index.css' //Quero apenas que nossa aplicação seja capaz de encontra esse arquivo, todos os import que for fazer  relacionado a css vai ser dessa forma, referencia o arquivo
import ReactDOM from 'react-dom'; // Posso coloca a variavel que eu quiser no ReactDOM
import React from 'react';

import Primeiro from './components/basicos/Primeiro'


ReactDOM.render(
    <div>

    <Primeiro></Primeiro>
        
    </div>, //Sintaxi JSX
    document.getElementById('root')
);