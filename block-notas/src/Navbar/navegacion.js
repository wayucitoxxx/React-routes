import { NavLink } from "react-router-dom";
/*{estilos}*/

export default function Navegacion (){
    return(
        <div className="lista">
            <ul>
                <li>
                    <NavLink to={'/'}> Principal Block de notas </NavLink>
                </li>
                <li>
                    <NavLink to={'/Archivo'}> Archivo </NavLink>
                </li>
                <li>
                    <NavLink to={'/Edicion'}> Edicion </NavLink>
                </li>
                <li>
                    <NavLink to={'/Formato'}> Formato </NavLink> 
                </li>
                <li>
                    <NavLink to={'/Ver'}> Ver </NavLink>
                </li>
                <li>
                    <NavLink to={'Ayuda'}> Ayuda </NavLink>
                </li>
            </ul>
        </div>
    );
}