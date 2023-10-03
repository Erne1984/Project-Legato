import React from "react";
import './Home.css';

import Filters from "../../components/Filters/Filters";
import TableMusics from "../../components/TableMusics/TableMusics";


const Home = () => {
    return (

        <main className="home-container">

            <Filters />

            <TableMusics></TableMusics>

        </main>
    )
}

export default Home;