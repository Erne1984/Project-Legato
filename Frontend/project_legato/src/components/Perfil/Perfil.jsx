import React from 'react';
import Wallpaper from '../../assets/wallpaper.jpg';
import './Perfil.css';
import Avatar from '../Avatar/Avatar';


const Perfil = () => {
    return (
        <>
            <img className="background" src={Wallpaper} alt="" />
            <aside>
                <Avatar />
                <span>
                    <ul>
                        <li><a href="">Todas</a></li>
                        <li><a href="">Cifras</a></li>
                        <li><a href="">Tablaturas</a></li>
                        <li><a href="">Partituras</a></li>
                    </ul>
                </span>
            </aside>
        </>
    )
}

export default Perfil;