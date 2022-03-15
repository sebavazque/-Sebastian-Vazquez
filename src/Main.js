import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";






const Main = (props) => {


    

    return (
        <main>
            <h2 className="title">Bienvenidos a {props.title} </h2>
            <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p>

        </main>
    );
}

export default Main;
