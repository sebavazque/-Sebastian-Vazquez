import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faSpinner} from '@fortawesome/free-solid-svg-icons'; 

import React from 'react'

const Loader = () => {
    return (
        <FontAwesomeIcon className='loader' icon={faSpinner} />
    )
}

export default Loader

