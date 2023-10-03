import React from 'react';

import './TableMusics.css';


const TableMusics = ({ artistName, musica, tipoi, avaliacao }) => {
    return (
        <main>
            <div className='table-box'>
                <span className='table-filtros'>
                    <li>Todas</li>
                    <li>Cifras</li>
                    <li>Tablaturas</li>
                    <li>Partituras</li>
                </span>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Artista</th>
                            <th>Música</th>
                            <th>Tipo</th>
                            <th>Avaliação</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Artista 1</td>
                            <td>Música 1</td>
                            <td>Cifras</td>
                            <td>5 estrelas</td>
                        </tr>
                        <tr>
                            <td>Artista 2</td>
                            <td>Música 2</td>
                            <td>Tablaturas</td>
                            <td>4 estrelas</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default TableMusics;