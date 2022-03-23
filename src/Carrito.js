import React from 'react'
import CartContext from "./CartContext";
import { useContext } from 'react';

const Carrito = () => {

    const carrito  = useContext(CartContext);
    
    return(

            <div>{
                
                    carrito.map((producto) => {
                        <div>
                            <h3> { producto.producto.titulo}</h3>
                        </div>

                        })
                
                
                }

            </div>


    )

}

export default Carrito