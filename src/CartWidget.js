import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCartArrowDown} from '@fortawesome/free-solid-svg-icons'; 
import {Link} from "react-router-dom";
import {useAppContext} from './CartContext';



const CartWidget = () => {
    const {cantidadTotal} = useAppContext();
    

    return (
    <section className='contador'>
        <div className='icon'>
            <Link to="/cart" >
                <h3>{cantidadTotal} </h3>
                <FontAwesomeIcon icon={faCartArrowDown} /> 
           
            </Link>
             
        </div>
        
    </section>
    );   
}

export default CartWidget;


