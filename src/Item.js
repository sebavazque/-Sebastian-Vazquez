
import { Link } from "react-router-dom";


const Item = ({producto}) => {
    return (
    <div className="contenedor"> 
            <div className="cards">
                <img src={producto.img} alt="" />
                <h2> {producto.titulo} </h2>
                <button className="ver"><Link to="/" className="verMas">Ver detalles</Link></button>
                
            </div>
    </div>
    );
}

export default Item


