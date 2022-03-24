import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import slider from "./images/slider.jpg"






const Main = (props) => {


    

    return (
        <main>
            <div className="mainImage" >
                <div className="sliderContent">                
                    <h2 className="title">Bienvenidos a {props.title} </h2>
                    <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p></div>

            </div>

            <ul className="listaMain">
                                <li>
                                    <Link to="/item/remeras">Remeras</Link>
                                    <Link to="/item/pantalones">Pantalones</Link>
                                    <Link to="/item/gorros">Gorros</Link>
                                </li>
            </ul>
        </main>
    );
}

export default Main;
