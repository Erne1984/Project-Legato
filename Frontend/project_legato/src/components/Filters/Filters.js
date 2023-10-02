import React from "react";

import './Filters.css'


const Filters = () => {
    return (
        <aside className="container-filtro">

            <div className="box-filtro">
                <h3 className="titulos">Filtros</h3>

                <div className="block">
                    <h4>Dificuldade</h4>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Iniciante</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Intermediário</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Avançando</label>
                    </div>
                </div>

                <div className="block">
                    <h4>Instrumeto</h4>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Violão/Guitarra</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Baixo</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Piano</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Ukulele</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Bateria</label>
                    </div>

                </div>
                <div className="block">
                    <h4>Genêro</h4>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Rock</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Pop</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Gospel</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Sertanejo</label>
                    </div>

                    <div className="item-filtro">
                        <input type="checkbox"></input>
                        <label>Clássico</label>
                    </div>

                </div>


            </div>


        </aside>
    )
}

export default Filters;