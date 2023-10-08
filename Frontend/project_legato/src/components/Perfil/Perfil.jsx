import React from 'react';
import Wallpaper from '../../assets/wallpaper.jpg';
import './Perfil.css';
import Avatar from '../Avatar/Avatar';


const Perfil = () => {
    return (
        <>
            <img className="background" src={Wallpaper} alt="" />
            <aside>
                <div className='imagem-perfil'>
                    <Avatar avatarUrl="https://effigy.im/a/brantly.eth.svg" name="Usuario" />
                </div>
                <span>
                    <ul>
                        <li><a href="">Perfil</a></li>
                        <li><a href="">Favoritos</a></li>
                        <li><a href="">Listas</a></li>
                        <li><a href="">Contribuições</a></li>
                        <li><a href="">Mensagens</a></li>
                    </ul>
                </span>
            </aside>
        </>
    )
}

export default Perfil;