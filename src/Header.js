import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";
import store from "./images/store.png"





function Header(){
    
    return (

            <header id="root">   
                <div  className="topNav">
                    <Link to="/inicio" className="logo"><img src={store} alt="" /></Link>
                    <nav className="navHead">
                        
                        <Link to="/inicio">Inicio</Link>
                        <Link to="/categorias" className="dropDownContainer">Categorias</Link>
                        <Link to="/contacto">Contacto</Link>
                        
                    </nav>
                    
                    <CartWidget/>
                    
                </div>
            </header>
    )

}

export default Header
