import {createContext , useState, useContext} from "react";
import { toast } from "react-toastify";

const AppContext = createContext([]);

export const useAppContext = () => useContext(AppContext)

export default function AppContextProvider({children}) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    function cleanCart() {
        setCart([])
    }


    function removeItem(id) {
        if (enElCarrito(id)) {
            const newCart = cart.filter(item => item.id !== id);
            setCart(newCart);
        }else{
            toast.error("No se puede borrar un item que no esta en el carrito")
        }
    }


    const enElCarrito = (id) => {
        return cart && cart.some(cartItem => cartItem.id === id)
    }

    const totalpedido = cart.reduce((total, item) => total + item.precio * item.quantity, 0)

    const cantidadTotal = cart.reduce((quantity, item) => quantity + item.quantity, 0)

    function addToCart(item) {
        enElCarrito(item) ?
            setCart(cart.map(prod => {
                if (prod.id === item.id) {
                    prod.quantity += item.quantity;
                }
                return prod
                
                
            }))
            :
            setCart([...cart, {id: item.item.id ,titulo: item.item.titulo, image: item.item.image, quantity: item.quantity, precio: item.item.precio,  }] )
            
}

    
    return(
        <AppContext.Provider value={{cart, addToCart, removeItem, cleanCart,totalpedido, cantidadTotal}}>
            {children}
        </AppContext.Provider>
        
    )
}
