import React from "react";
import './Home.css';

import Filters from "../../components/Filters/Filters";
import TableMusics from "../../components/TableMusics/TableMusics";


const Home = () => {
    return (

        <main className="home-container">
            <Filters />
            <div className="content">
            <h2>Músicas mais acessadas</h2>
            <TableMusics></TableMusics>
            <h2>Artistas mais acessados</h2>
            </div>
        </main>
    )
}

export default Home;