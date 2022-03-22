import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCartArrowDown} from '@fortawesome/free-solid-svg-icons'; 
import {Link} from "react-router-dom";




const CartWidget = () => {
    return (
    <section>
        <div className='icon'>
            <Link to="/carrito" ><FontAwesomeIcon icon={faCartArrowDown} /></Link>
        </div>
    </section>
    );   
}

export default CartWidget;


