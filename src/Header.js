import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";
import store from "./images/store.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faAlignJustify} from '@fortawesome/free-solid-svg-icons'; 




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
                    <div className="burger">


                        <button>
                        <FontAwesomeIcon icon={faAlignJustify} className="iconBurger" >
                                                  <ul>
                                                        <li><Link to="/inicio">Inicio</Link></li>
                                                        <li><Link to="/categorias" className="dropDownContainer">Categorias</Link></li>
                                                        <li><Link to="/contacto">Contacto</Link></li>
                                                    </ul>  
                                                </FontAwesomeIcon>
                                                
                        </button>

                      
                     

                    </div>
                </div>
            </header>
    )

}

export default Header
