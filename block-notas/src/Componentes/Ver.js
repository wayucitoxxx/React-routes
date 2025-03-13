import React from "react";
import { Link } from "react-router-dom";
import '../styles/ver.css'

export default function Ver (){
    const ver ='Ver'
    const barra ='Barra'

    return(
        <div>
            <h1>
                Ver
            </h1>
            <div className="link-contendor">
            <Link to={`/ver/${ver}`}>zoom</Link>
            <Link to={`/barra/${barra}`}>Barra de estado</Link>
            </div>
        </div>

    );
}