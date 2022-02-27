const ItemListContainer = (props) => {
    return (
        <main>
            <h2 className="title">Bienvenidos a {props.title} </h2>
            <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p>
        </main>
    )
}

export default ItemListContainer