import ReactDOM from 'react-dom';
import React from 'react';


const tag = <strong>Olá React!</strong>

ReactDOM.render(
    <div>
        
        { tag }
        
    </div>, //Sintaxi JSX
    document.getElementById('root')
);