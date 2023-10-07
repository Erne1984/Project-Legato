import React from 'react';
import './Perfil_Usuario.css';
import Perfil from '../../components/Perfil/Perfil';


const Perfil_Usuario = () => {
    return (
        <div className='Perfil_usuario'>
            <Perfil />
            <main className='container-usuario'>
                <h2>Pagina</h2>
            </main>
        </div>
    )
}

export default Perfil_Usuario;