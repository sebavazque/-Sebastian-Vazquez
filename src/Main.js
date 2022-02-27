const Main = (props) => {
    return (
        <main>
            <h2>Bienvenidos {props.title} </h2>
            <p>Somos una empresa de indumentaria deportiva fundada en {props.year} </p>
        </main>
    );
}

export default Main;
