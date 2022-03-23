import ItemCounter from "./ItemCounter";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import MiProvider from "./CartContext";
import CartContext from "./CartContext";



const ItemDetail = ({
    id,
    titulo,
    precio,
    image,
    origen,
    genero,
    material,
    categoria,
    cantidad,
    
}) => {
    
    const [add , setAdd] = useState(false) 
    const addItem = useContext(CartContext)
    
    return (
        <div className="superContent">
            <div className="container">
                <div className="cards" key={id}>
                    <img src= {image} alt="" />
                    <h2> {titulo} </h2>
                    <h4>${precio} </h4>
                    <p>Origen: {origen} </p>
                    <p>Genero: {genero} </p>
                    <p>Material: {material}</p>
                    <div>
                    {
                        add ?
                            <div className="añadido">Añadido!</div>
                            :
                        <ItemCounter producto={{id,image,titulo,precio,cantidad}} stock={5} initial={1} {...addItem} />
                        }
                        
                    </div>
                    <div className='endCart'> <Link to="/carrito" > <button> Finalizar compra!</button> </Link></div>
                </div> 

            </div>
        </div>
    );
}

export default ItemDetail