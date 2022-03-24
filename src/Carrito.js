import React from 'react'
import { useAppContext } from "./CartContext";

const Carrito = () => {

    const {cart} = useAppContext();
    
    return(

        <div>
            {cart.map(item => 
            <div> <h1> {item.item.titulo} </h1> </div>
            )}

        </div>
                
    )

}

export default Carrito