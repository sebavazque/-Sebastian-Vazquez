import {createContext} from "react";
import { useState } from "react";


export const contexto = createContext()

const {Provider} = contexto

const MiProvider =({children}) => {

    const [carrito , setCarrito] = useState([])
    const [total, setTotal]= useState(0)
    
    const addItem = (producto , numero) => {
        console.log("lol")
        // isInCart(producto.id)
        //     ?
        //     setCarrito(carrito.map((prod) => {
        //         if (prod.id === carrito.id) {
        //             prod.numero += numero
        //         }
        //         return prod
        //     }))
        //     :
        //     setItems([...items, { id: producto.id , titulo: producto.titulo }]);
    }

    const enCart = () =>{

    }
    
    const borrarDelCart = () =>{

    }

    const isInCart= () => {

    }

    const vaciarCart = () =>{

    }

    return(
        < Provider value={{carrito, addItem}}>
            {children}
        </Provider>
    )
}

export default MiProvider