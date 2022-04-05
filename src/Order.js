import { dbFirebase } from './Firebase'
import { collection, doc, getDoc, setDoc} from 'firebase/firestore';
import { useAppContext } from './CartContext'
import { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import OrdenDetail from './OrdenDetail';


const Order = (props) => {

    const {cart,totalpedido} = useAppContext() 
    const orders = collection(dbFirebase, "orders")
    const newOrder = doc(orders)


    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(true)
    const {ordenId} = useParams()

    


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




    useEffect(() => {
        if(order?.id !== ordenId){
            setLoading(true)
            getDoc(orders.doc(ordenId))
            const docRef= doc( dbFirebase, `order`, ordenId)
            getDoc(docRef)
                .then((data) => setOrder ({id: data, ...data.data()}))
                .catch(() => toast.error("Error al cargar la orden"))
                .finally(() => setLoading(false))
        } 
    }, [ordenId, order])



    console.log(order)

    return loading ? <Loader/> : <OrdenDetail order={order}/>

}

export default Order




