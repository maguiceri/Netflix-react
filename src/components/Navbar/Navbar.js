import React from "react";
import './styles.scss';
import Bitmap from '../../base/img/Bitmap.png';
class Navbar extends React.Component{
    render(){
        return(
        <nav className="bar-words">
            <img src={Bitmap}></img>
            <ul className="words">
                <li className="link-wrapper"><a className="word" href="#cover">Inicio</a></li>
                <li className="link-wrapper"><a className="word" href="#s">Series</a></li>
                <li className="link-wrapper"><a className="word" href="#">Peliculas</a></li>
                <li className="link-wrapper"><a className="word" href="#add">Agregados recientemente</a></li>
                <li className="link-wrapper"><a className="word" href="#">Mi lista</a></li>
            </ul>
        </nav> 
        )
    }
}

export default Navbar;

