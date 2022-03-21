import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";
import store from "./images/store.png"


function Header(){
    return (
        <div id="root">
            <header >   
                <div  className="topNav">
                    <Link to="/" className="logo"><img src={store} alt="" /></Link>
                    <nav className="navHead">
                        
                        <Link to="/">Inicio</Link>
                        <Link to="/item/:category" className="dropDownContainer">
                            Categorias
                        </Link>
                        <Link to="/contacto/:id">Contacto</Link>
                        
                    </nav>
                    
                    <CartWidget/>
                    
                </div>
            </header>
        </div> 
    )

}

export default Header
