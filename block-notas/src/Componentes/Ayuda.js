import React from "react"
import {Link} from 'react-router-dom'
import '../styles/ayuda.css'

export default function Ayuda (){
    const ver='ayuda'
    const comen='ver'
    return(
        <div>
            <h1>
                Ayuda
            </h1>
            <div className="link-contendor">
                <Link to={`/ver-ayuda/${ver}`}>Ver la ayuda</Link>
                <Link to={`/comentarios/${comen}`}>Encivar comentarios</Link>
            </div>
            
        </div>

    );
}