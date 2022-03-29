
import { Link } from "react-router-dom";







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
                                    <Link to="/item/buzos">Buzos</Link>
                                </li>
            </ul>
            <hr />
        </main>
    );
}

export default Main;
