import React from 'react';
import "./Avatar.css";

const Avatar = ({ avatarUrl, name }) => {
    return(
        <div className='container-avatar'>
            <div className='perfil-box'>
                    <img className='perfil' src={avatarUrl} alt={name}></img>
                    <p>{name}</p>
            </div>
        </div>
    )
} 

export default Avatar;
