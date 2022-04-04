import { dbFirebase } from './Firebase'
import { collection, doc, setDoc} from 'firebase/firestore';
import { useAppContext } from './CartContext'


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


        </div>
    ) 

}

export default Order




