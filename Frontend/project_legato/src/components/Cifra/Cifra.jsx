import React from "react";

import './Cifra.css'

const Cifra = ({ artista, nome, conteudo }) => {

    const conteudoFormatado = conteudo.replace(/\t/g, '    ');
    const linhas = conteudoFormatado.split('\n');

    return (
        <main>
            <h1 className="titulo">{nome}</h1>
            <h2 className="sub-titulo">{artista}</h2>

            <div className="cifra-column">
                <div className="cifra-video">
                    <pre className="cifra">
                        {linhas.map((linha, index) => (
                            <span key={index}>
                                {linha}
                                <br />
                            </span>
                        ))}
                    </pre>

                    <div className="video-box ">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/QDYfEBY9NM4?si=5JXMBwTg_p1I5rFM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cifra;