import React from 'react';
import './Perfil_Usuario.css';

import Perfil from '../../components/Perfil/Perfil';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '../../components/Avatar/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';


const Perfil_Usuario = ({ }) => {

    const communitiesUrls = [
        "https://clipart-library.com/images_k/transparent-bass-guitar/transparent-bass-guitar-23.png",
        "https://images.emojiterra.com/google/android-12l/512px/1f3b8.png",
        "https://www.clipartmax.com/png/middle/3-31605_size-guitar-icon-png.png",
        "https://cdn-icons-png.flaticon.com/512/4472/4472584.png",
        "https://t3.ftcdn.net/jpg/04/79/81/76/360_F_479817672_BpTyGX9qAl3rs9mHqvQUsyWXTJrkLUII.jpg"
    ]

    return (
        <div className='Perfil_usuario'>
            <Perfil />
            <main className='container-usuario'>
                <div className='header-perfil'>


                    <div className='titulo-perfil-usuario'>
                        <h2 >Bio</h2>
                        <button className='btn-bio'><AddIcon /><span>Editar Bio</span></button>
                    </div>


                    <div className='box-seguidores'>
                        <span className='seguidores'>0 Seguidores</span>
                        <span className='seguindo'>0 Seguindo</span>
                        <SettingsIcon />
                    </div>

                </div>
                <div className='border-bottom'></div>

                <div className='box-membro'>
                    <span>Membro desde de { }</span>
                </div>

                <div className='bio'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </div>

                <div>
                    <div className="titulo">
                        <h2>Minhas Comunidades</h2>
                    </div>
                </div>

                <div className="list-communities">
                    {communitiesUrls.map((artista, index) => (
                        <Avatar key={index} avatarUrl={artista} />
                    ))}
                </div>

            </main>
        </div>
    )
}

export default Perfil_Usuario;