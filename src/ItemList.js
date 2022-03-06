import Item from "./Item" 
import { useState} from "react"
import ItemListContainer from './ItemListContainer';

const ItemList  = (props) => {
    const [producto] = useState([{
            id: 1,
            titulo: "Remera",
            precio: 1200
        },
        {
            id: 2,
            titulo: "Pantalon",
            precio: 2200
        },
        {
            id: 3,
            titulo: "Gorro",
            precio: 500
        }])
        
        return(
        <ul>
                    {producto.map((producto)=>{
                        return <li> <Item  id={producto.id} titulo={producto.titulo} precio={producto.precio}/> </li>
                    })}
            </ul>
    )
}



export default ItemList


