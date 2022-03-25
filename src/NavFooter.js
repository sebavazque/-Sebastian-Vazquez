import { Link } from "react-router-dom";
import store from "./images/store.png"

const NavFooter = ({ React }) => (
  <footer> 
      <div className="footerContent">
        <hr />
          <Link to="/" ><img src={store} alt="" /></Link>
        <div className="subNav">
          <Link className="a" to="/">Inicio</Link>
          <Link className="a" to="/item/:category" >Categorias</Link>
          <Link className="a" to="/contacto">Contacto</Link>
        </div>  

          
      </div>
</footer>

);

export default NavFooter;
