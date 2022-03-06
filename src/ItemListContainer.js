
import { useState, useEffect } from "react"
import Item from "./Item";
import ItemList from "./ItemList";





const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState([])


    useEffect(()=>{

        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(setProductos)
            },2000)
        })


        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(producto)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })



    return (
        <div>
            <p>{loading ? "Cargando..." : "Ya tenes los productos"}</p>
            <ItemList />
        </div>
            
    
    );
}


export default ItemListContainer