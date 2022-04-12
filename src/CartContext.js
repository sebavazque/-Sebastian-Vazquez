import { addDoc, collection, increment, writeBatch , doc} from "firebase/firestore";
import {createContext , useState, useContext} from "react";
import { toast } from "react-toastify";
import { dbFirebase } from "./Firebase";

const AppContext = createContext([]);

export const useAppContext = () => useContext(AppContext)

export default function AppContextProvider({children}) {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);


    

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

    const totalPedido = cart.reduce((total, item) => total + item.precio * item.quantity, 0)

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
            setCart([...cart, {id: item.item.id ,titulo: item.item.titulo, img: item.item.img, quantity: item.quantity, precio: item.item.precio,  }] )
            
}


const sendOrder = () => {
    setLoading(true);
    let _orderId
    let total = 0
    const orders = collection(dbFirebase, "orders");
    const items = cart.map (item => {
        total += item.precio * item.quantity
        return {
            cantidad: item.quantity,
            id: item.id,
            titulo: item.titulo,
            precio: item.precio,
            totalPedido: total
        }
    })

        const order =  {
            items: items,
            totalPedido: total,
            fecha: new Date().toLocaleDateString(),
            info: {
                nombre: 'Sebastian Vazquez',
                email: 'sebavazquez@gmail.com',
                telefono: '+57 300 1234567'
        }

    }
    
    addDoc(orders, order)
        .then(data => {
            _orderId = data.id;
            const batch = writeBatch(dbFirebase);
            return batch.commit();
        })

    .then(() => {
        setCart([]);
        toast.success('Su pedido se ha enviado correctamente')})
        .catch (() => toast.error('Error al enviar el pedido'))
        .finally(() => setLoading(false));
        console.log(order)
}

    
    return(
        <AppContext.Provider value={{cart, addToCart, removeItem, cleanCart,totalPedido, cantidadTotal, sendOrder}}>
            {children}
        </AppContext.Provider>
        
    )
}
