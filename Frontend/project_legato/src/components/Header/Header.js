import React from "react";
import './Header.css'

import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    return (
        <header className="container">

            <div className="menu-logo-pesquisa">

                <div className="logo-box">
                    <img src="/images/logo.svg" alt="Logo legato" className="logo"></img>
                </div>

                <div className="barra-pesquisa-box">
                    <input type="text" placeholder="Pesquise uma música" className="barra-pesquisa"></input>
                    <button className="search-icon"><SearchIcon/></button>
                    
                </div>

            </div>


            <div className="menu-perfil">

                <ul className="menu">
                    <li>Explorar</li>
                    <li>Comunidades</li>
                    <li>Upload</li>
                </ul>

                <div className="perfil-pessoal">
                    <img src="/images/user.svg"></img>
                </div>

            </div>

        </header>
    )
}

export default Header;