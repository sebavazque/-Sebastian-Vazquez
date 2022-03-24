import ItemCounter from "./ItemCounter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./CartContext";
import { toast } from "react-toastify";



const ItemDetail = ({producto}) => {
    
    const [add , setAdd] = useState(false) 
    const {addToCart} = useAppContext()

    const onAdd = (numero) => {
        toast.success("Producto agregado al carrito")
        addToCart({item:producto, quantity:numero}) 
        
        }
    
    return (
        <div className="superContent">
            <div className="container">
                
                <div className="cards" key={producto.id}>
                    <div className="colum"> 
                        <img src= {producto.image} alt="" />  
                    </div>
                    
                    <div className="colum">
                        <h2> {producto.titulo} </h2>
                        <h4>${producto.precio} </h4>
                        <p>Genero: {producto.genero} </p>
                        <p>Material: {producto.material}</p>
                    </div>

                    <div>
                    {
                        add ?
                            <div className="añadido">Añadido!</div>
                            :
                        <ItemCounter stock={5} initial={1} onAdd={onAdd} />
                        }
                        
                    </div>
                    <div className='endCart'> <Link to="/cart" > <button> Finalizar compra!</button> </Link></div>
                </div> 

            </div>
        </div>
    );
}

export default ItemDetail