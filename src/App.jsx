import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

const App = () => {


    <div id="app">
        <h1>Fundamentos React</h1>
        <Fragmento />
        <ComParametro
            titulo="Segundo Componente"
            aluno="Alex"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>

};
export default App