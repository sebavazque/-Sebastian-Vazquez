import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";






const Main = (props) => {


    

    return (
        <main>
            <h2 className="title">Bienvenidos a {props.title} </h2>
            <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p>
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
