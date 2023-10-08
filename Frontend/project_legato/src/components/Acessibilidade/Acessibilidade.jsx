import React from "react";

import './Acessibilidade.css'

const Acessibilidade = ({themeToggler}) => {
    return (
        <div className="Acessibilidade">
            <span>
                <ul>
                    <li><a href="">Acessibilidade</a></li>
                    <li><a href="">A-</a></li>
                    <li><a href="">A+</a></li>
                    <li><button onClick={()=> themeToggler()}>Alto Contraste</button></li>
                </ul>
            </span>
        </div>
    )
}

export default Acessibilidade;