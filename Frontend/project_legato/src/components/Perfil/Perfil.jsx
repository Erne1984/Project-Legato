import React from 'react';
import Wallpaper from '../../assets/wallpaper.jpg';
import './Perfil.css';


const Perfil = () => {
    return (
        <>
            <img className="background" src={Wallpaper} alt="" />
            <aside>
                <span>
                    <li>Todas</li>
                    <li>Cifras</li>
                    <li>Tablaturas</li>
                    <li>Partituras</li>
                </span>
            </aside>
        </>
    )
}

export default Perfil;