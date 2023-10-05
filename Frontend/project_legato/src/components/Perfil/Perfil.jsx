import React from 'react';
import Wallpaper from '../../assets/wallpaper.jpg';
import './Perfil.css';


const Perfil = () => {
    return (
        <>
            <img className="background" src={Wallpaper} alt="" />
            <aside>
                <span>
                    <li><a href="">Todas</a></li>
                    <li><a href="">Cifras</a></li>
                    <li><a href="">Tablaturas</a></li>
                    <li><a href="">Partituras</a></li>
                </span>
            </aside>
        </>
    )
}

export default Perfil;