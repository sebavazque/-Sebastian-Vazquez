import Item from "./Item" 


const ItemList  = ({producto}) => {
    
        
        return(
        <ul>
                    {producto.map((producto)=>{
                        return <div> <Item producto={producto} key ={producto.id}/> </div>
                    })}
            </ul>
    )
}



export default ItemList


