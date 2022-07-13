/**
 * Primeiro componente, 
Com relação ao padrão de nomenclaturas todos os componentes eu vou criar com o nome do arquivo com a primeira letra maiúscula.*/

import React from 'react';

export default function Primeiro() {
    const msg = "Seja bem vindo(a)!";
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    );
}