import ItemCounter from "./ItemCounter";
import ItemDetailContainer from "./ItemDetailContainer";

const onAdd = (itemSeleccionado) =>{
    console.log("agregado")
}


const ItemDetail = ({producto}) => {
    return (
    <div className="container">
        <div className="cards">
            <img src= {producto.img} alt="" />
            <h2> {producto.titulo} </h2>
            <h4>${producto.precio} </h4>
            <p>Origen: {producto.origen} </p>
            <p>Genero: {producto.genero} </p>
            <p>Material: {producto.material}</p>
            <ItemCounter stock={5} initial={1} onAdd={onAdd} />
        </div> 
    </div>
    );
}

export default ItemDetail