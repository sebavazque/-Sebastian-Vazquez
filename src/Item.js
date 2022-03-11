import ItemListContainer from "./ItemListContainer";
import ItemList from "./ItemList";


const Item = ({producto}) => {
    return (
    <div className="contenedor"> 
            <div className="cards">
                <img src={producto.img} alt="" />
                <h2> {producto.titulo} </h2>
            </div>
    </div>
    );
}

export default Item


