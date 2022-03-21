import ItemCounter from "./ItemCounter";
import { useState } from "react";
import { Link } from "react-router-dom";




const ItemDetail = ({
    id,
    titulo,
    precio,
    image,
    origen,
    genero,
    material,
    categoria,
}) => {
    
    const [add , setAdd] = useState(false) 

    const onAdd = () =>{
        setAdd(!add)
    }
    

    
    return (
        
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
                <ItemCounter stock={5} initial={1} onAdd={onAdd} />
                }
                
            </div>
            <div className='endCart'> <Link to="/carrito" > <button> Finalizar compra!</button> </Link></div>
        </div> 

    </div>
    );
}

export default ItemDetail