import React from "react";

export default function Aleatorio(props) {
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo:</strong> {props.minino}
            </p>
            <p>
                <strong>Valor Máximo:</strong> {props.maximo}
            </p>
            <p>
                <strong>Valor Escolhido:</strong> {props.maximo}
            </p>
        </div>
    );
};




