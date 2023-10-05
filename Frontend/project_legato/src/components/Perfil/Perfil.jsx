import React from 'react';
import Wallpaper from '../../assets/wallpaper.jpg';
import './Perfil.css';


const Perfil = () => {
    return (
        <main>
            <div className='background'>
                <img src={Wallpaper} alt="" />
            </div>
            <aside>
                <span>
                    <li>Todas</li>
                    <li>Cifras</li>
                    <li>Tablaturas</li>
                    <li>Partituras</li>
                </span>
            </aside>
        </main>
    )
}

export default Perfil;