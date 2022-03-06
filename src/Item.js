import ItemListContainer from "./ItemListContainer";
import ItemList from "./ItemList";


const Item = (props) => {
    return (
    <div> 
            <ul>
                
                <li> {props.id} </li>
                <li> {props.titulo} </li>
                <li> {props.precio} </li>
                
            </ul>
    </div>
    );
}

export default Item


