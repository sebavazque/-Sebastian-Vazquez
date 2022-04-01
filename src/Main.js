
import { Link } from "react-router-dom";







const Main = (props) => {


    

    return (
        <main>
            <div className="mainImage" >
                <div className="sliderContent">                
                    <h2 className="title">Bienvenidos a {props.title} </h2>
                    <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p></div>

            </div>

            <div className="containeMain">
                <div className="serviceItems">
                    <h3>Envios gratis</h3>
                    <p>Para compras superiores a $7000</p>
                </div>
                <div class="vl"></div>
                <div className="serviceItems">
                    <h3>Cambio gratis</h3>
                    <p>El primer cambio es gratis</p>
                </div>
                <div class="vl"></div>
                <div className="serviceItems">
                    <h3>Calidad asegurada</h3>
                    <p>Nuestra indumentaria es de gran calidad</p>
                </div>
            </div>

            <hr />
        </main>
        
    );
}

export default Main;
