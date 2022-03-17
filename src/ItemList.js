import Item from "./Item" 


const ItemList  = ({productos}) => {
    
        
        return(
        <ul>
                    {productos.map((producto)=>{
                        return <div> <Item producto={producto} key ={producto.id}/> </div>
                    })}
            </ul>
    )
}




export default ItemList


