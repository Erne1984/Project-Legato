import React from "react";
import Acessibilidade from '../Acessibilidade/Acessibilidade';

import './Header.css';
import Logo from '../../assets/logo.svg';
import UserIcon from '../../assets/user.svg';
import SearchIcon from '@mui/icons-material/Search';

const Header = ({ themeToggler }) => {

    return (
        <>
            <Acessibilidade themeToggler={themeToggler} />
            <header className="container-header">

                <div className="menu-logo-pesquisa">

                    <div className="logo-box">
                        <a href="/">
                            <img src={Logo} alt="Logo legato" className="logo" />
                        </a>
                    </div>

                    <div className="barra-pesquisa-box">
                        <input type="text" placeholder="Pesquise uma música" className="barra-pesquisa"></input>
                        <button className="search-icon"><SearchIcon /></button>

                    </div>

                </div>


                <div className="menu-perfil">

                    <ul className="menu">
                        <li><a href="/Explorar">Explorar</a></li>
                        <li><a href="/">Comunidades</a></li>
                        <li>Upload</li>
                    </ul>

                    <div className="perfil-pessoal">
                        <img src={UserIcon}></img>
                    </div>

                </div>

            </header>
        </>
    )
}

export default Header;