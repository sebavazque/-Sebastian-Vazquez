import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCartArrowDown} from '@fortawesome/free-solid-svg-icons'; 





const CartWidget = () => {
    return (
        <div className='icon'>
            
            <a href="#"><FontAwesomeIcon icon={faCartArrowDown} /></a>
            
        </div>
    );   
}

export default CartWidget;


