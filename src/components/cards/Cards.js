import React from 'react';
import { Link } from 'react-router-dom';
const Cards = () => {
    return (
        <div className='ui raised very padded text container segment'
        style={{marginTop: '80px'}}>
            <h3 className='ui header'>Cards</h3>
            <p>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. </p>
            <button className='ui button'><Link to='/cards/12'>Ver detalle</Link></button>
        </div>
    )
}

export default Cards;