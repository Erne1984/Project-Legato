import React from "react";

import "./Transcricao.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Cifra from "../../components/Cifra/Cifra";

const Transcricao = () => {

    const musica = {
        id: 1,
        artista: "The Beatles",
        nome: "Let it Be",
        cifra: ` 
Tom: C

[Intro] C  G  Am  F  C  G  F  Em/F  F6  C

C       G     Am        F   F6  C
E|---------------------------------0---0----|
B|-1---1---0---0---1---1---1---3---1---1----|
G|-0---0---0---0---2---2---2---2-----0---0--|
D|---2---2---0---0---2-------3---3----------|
A|-3---3-----------0---0-----------3---3----|
E|---------3---3---------3-1---1------------|

G       F   Em/F F6   C
E|---------1---0----------------------------|
B|-3---3---1---0----3----1---1--------------|
G|-4---4---2---0----2----0---0--------------|
D|---5---5----------3----2-2---2------------|
A|-----------------------3---3--------------|
E|-3---3---1-1------------------------------|

[Primeira Parte]

C              G
When I find myself in times of trouble
Am          F           F6
Mother Mary comes to me
C                G              F Em/F F6 C
Speaking words of wisdom, let it be

C              G
And in my hour of darkness
Am                F           F6
She is standing right in front of me
C                G              F Em/F F6 C
Speaking words of wisdom, let it be

[Refrão]

Am      Am/G    F       C
E|----------------------------------------------------|
B|-1---1---1---1---1---1---1---1----------------------|
G|-2---2---2---2---2---2---0---0----------------------|
D|---2---2---2---2---3---3---2---2--------------------|
A|-0---0-------------------3---3----------------------|
E|---------3---3---1---1------------------------------|

C       G       F    Em/F F6     C
E|-----------------1----0-----------------------------|
B|-1---1---0---0---1----0----3------1---1-------------|
G|-0---0---0---0---2----0----2------0---0-------------|
D|---2---2---0---0-----------3------2-2---2-----------|
A|-3---3----------------------------3---3-------------|
E|---------3---3---1--1-------------------------------|`,

    };

    return (
        <main className="container-transcricao">
            <div className="box-cifra">
                <div>
                    <SideMenu className="side-menu" />
                </div>

                <div>
                    <Cifra nome={musica.nome} artista={musica.artista} conteudo={musica.cifra} />

                </div>

            </div>
        </main>
    )

}

export default Transcricao;