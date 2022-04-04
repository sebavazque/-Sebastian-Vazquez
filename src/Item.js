import { Link } from "react-router-dom";
import Categorias from "./Categorias";

const Item = ({producto}) => {
    return (
            <div className="cardContenedor">
                <div className="itemContainer">
                        <div className="card">
                            <img src={producto.img} alt="" />
                            <h2> {producto.titulo} </h2>
                            <button className="ver"><Link to={`/${producto.categoria}/${producto.id}`} className="verMas">Ver detalles</Link></button>
                            
                        </div>
                </div>
            </div>
    );
}

export default Item


