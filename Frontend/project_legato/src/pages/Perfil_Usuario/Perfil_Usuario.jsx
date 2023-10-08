import React from 'react';
import './Perfil_Usuario.css';

import Perfil from '../../components/Perfil/Perfil';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';


const Perfil_Usuario = ({ }) => {
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
                        <SettingsIcon/>
                    </div>

                </div>

            </main>
        </div>
    )
}

export default Perfil_Usuario;