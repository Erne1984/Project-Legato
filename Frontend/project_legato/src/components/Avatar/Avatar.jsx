import React from 'react';
import "./Avatar.css";

const Avatar = ({ avatarUrl, userName, children }) => {
    return(
        <div className='container'>
            <div className='perfil-box'>

                <div className='topo'>
                    <img className='perfil' src={avatarUrl} alt={userName}></img>
                </div>

                {children}
            </div>
        </div>
    )
} 

export default Avatar;
