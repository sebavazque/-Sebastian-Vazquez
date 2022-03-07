import ItemListContainer from "./ItemListContainer";
import ItemList from "./ItemList";


const Item = ({producto}) => {
    return (
    <div> 
            <ul>
                
                
                <li> {producto.titulo} </li>
                <li> {producto.precio} </li>
                
            </ul>
    </div>
    );
}

export default Item


