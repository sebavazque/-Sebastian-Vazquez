import { dbFirebase } from './Firebase'
import { collection, doc, setDoc} from 'firebase/firestore';
import { useAppContext } from './CartContext'
import { useEffect } from 'react';


const Order = () => {

    const {cart,totalpedido} = useAppContext() 
    const orders = collection(dbFirebase, "orders")
    const newOrder = doc(orders)

    setDoc(newOrder, { 
        totalpedido: totalpedido, 
        items: cart, 
        fecha: new Date(), 
        info: { 
            nombre: "Sebastian", 
            apellido: "Vazquez", 
            email: "sebavazquez@gmail.com"
        }
    })


    return (
        <div>
            <h1>Orden</h1>
            <h2>Total: ${totalpedido}</h2>
            <h3>Fecha: {new Date().toLocaleDateString()}</h3>
            <h3>Nombre: {"Sebastian"}</h3>
            <h3>Apellido: {"Vazquez"}</h3>
        </div>
    ) 

}

export default Order




