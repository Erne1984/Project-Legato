import React from "react";
import './Explorar.css';

import Filters from "../../components/Filters/Filters";
import TableMusics from "../../components/TableMusics/TableMusics";


const Explorar = () => {
    return (

        <main className="home-container">
            <Filters />
            <div className="content">
                <div className="title-header">
                    <h2>Explore nosso catálogo</h2>
                    <a href=""><h5>Mais populares</h5></a>
                </div>
                <TableMusics></TableMusics>
            </div>
        </main>
    )
}

export default Explorar;