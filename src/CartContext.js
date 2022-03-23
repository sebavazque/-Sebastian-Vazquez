import {createContext} from "react";
import { useState } from "react";


export const contexto = createContext()

const {Provider} = contexto

const CartContext =({children}) => {

    const [carrito , setCarrito] = useState([])
    const [total, setTotal]= useState(0)


    const isInCart= (id) => {
        const found = carrito.find(producto => producto.id === id)
        return found
    }

    const addItem = (producto , numero) => {
        
        isInCart(producto.id)
            ?
            setCarrito(carrito.map((prod) => {
                if (prod.id === carrito.id) {
                    prod.numero += numero
                }
                return prod
            }))
            :
            setCarrito([...carrito, { id: producto.id , titulo: producto.titulo }]);
            console.log(carrito)
    }

    const enCart = () =>{

    }
    
    const borrarDelCart = () =>{

    }

    const vaciarCart = () =>{

    }

    return(
        <Provider value={{carrito, addItem}}>
            {children}
        </Provider>
    )
}

export default CartContext