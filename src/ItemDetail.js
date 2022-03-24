import ItemCounter from "./ItemCounter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./CartContext";



const ItemDetail = ({producto}) => {
    
    const [add , setAdd] = useState(false) 
    const {addToCart} = useAppContext()

    const onAdd = (numero) => {
       
        addToCart({item:producto, quantity:numero}) 
        console.log("se agrego al carrito")
        }
    
    return (
        <div className="superContent">
            <div className="container">
                
                <div className="cards" key={producto.id}>
                    <img src= {producto.image} alt="" />
                    <h2> {producto.titulo} </h2>
                    <h4>${producto.precio} </h4>
                    <p>Genero: {producto.genero} </p>
                    <p>Material: {producto.material}</p>
                    <div>
                    {
                        add ?
                            <div className="añadido">Añadido!</div>
                            :
                        <ItemCounter stock={5} initial={1} onAdd={onAdd} />
                        }
                        
                    </div>
                    <div className='endCart'> <Link to="/carrito" > <button> Finalizar compra!</button> </Link></div>
                </div> 

            </div>
        </div>
    );
}

export default ItemDetail