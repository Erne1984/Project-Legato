import React from "react";
import './Home.css';

import Filters from "../../components/Filters/Filters";
import TableMusics from "../../components/TableMusics/TableMusics";


const Home = () => {
    return (

        <main className="home-container">
            <Filters />
            <div className="content">
                <div className="title-header">
                    <h2>Músicas mais acessadas</h2>
                    <a href=""><h5>Ver top</h5></a>
                </div>
                <TableMusics></TableMusics>
                <div className="title-header">
                    <h2>Artistas mais acessados</h2>
                    <a href=""><h5>Ver top</h5></a>
                </div>
                <div className="title-header">
                    <h2>Conheça nossas comunidades</h2>
                    <a href=""><h5>Ir para comunidades</h5></a>
                </div>

            </div>
        </main>
    )
}

export default Home;