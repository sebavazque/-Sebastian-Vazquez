import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";


function Header(){
    return (
        <div id="root">
            <header >   
                <div  className="topNav">
                    <nav className="navHead">
                        <Link to="/contacto/:id">Contacto</Link>
                        <Link to="/" className="dropDownContainer">
                            Categorias
                            <ul className="dropDown">
                                <li>
                                    <Link to="/item/remeras">Remeras</Link>
                                    <Link to="/item/pantalones">Pantalones</Link>
                                    <Link to="/item/gorros">Gorros</Link>
                                </li>
                            </ul>
                        </Link>
                        <Link to="/">Inicio</Link>
                    </nav>
                    
                    <CartWidget/>
                    <Link to="/" className="logo"><h2>Oahu Store </h2></Link>
                </div>
            </header>
        </div> 
    )

}

export default Header
