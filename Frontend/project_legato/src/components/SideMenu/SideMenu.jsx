import React from "react";

import "./SideMenu.css";
import Avatar from "../Avatar/Avatar";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DownloadIcon from '@mui/icons-material/Download';

const SideMenu = () => {
    return (
        <aside>

            <div className="side-menu">
                <Avatar avatarUrl={"https://www.nme.com/wp-content/uploads/2018/10/BASEMENT-7-Mitchell-Wojcik.jpg"} />

                <ul className="actions-buttons">
                    <li className="btn-li"><span className="btn-side"><UnfoldMoreIcon/> Rolagem</span></li>
                    <li className="btn-li"><span className="btn-side"><RemoveIcon/> Texto <AddIcon/></span></li>
                    <li className="btn-li"><span className="btn-side"><RemoveIcon/>  Tom <AddIcon/></span></li>
                    <li><span><DownloadIcon/> Baixar </span></li>
                    <li><span>Corrigir</span></li>
                    <li><span>Afinação</span></li>
                    <li><span>Favoritar</span></li>
                    <li><span>Exibir</span></li>
                </ul>
            </div>

        </aside>
    )
}

export default SideMenu;