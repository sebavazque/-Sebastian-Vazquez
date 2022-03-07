import Item from "./Item" 


const ItemList  = ({producto}) => {
    
        
        return(
        <ul>
                    {producto.map((producto)=>{
                        return <li> <Item producto={producto} key ={producto.id}/> </li>
                    })}
            </ul>
    )
}



export default ItemList


