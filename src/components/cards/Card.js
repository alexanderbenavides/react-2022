import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Card = () => {
    const {id} = useParams();
    useEffect(() => {
        console.log(id);
    }, [id])
    return (
        <div className='ui raised very padded text container segment'
        style={{marginTop: '80px'}}>
            <h3 className='ui header'>Card</h3>
            <p>The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet. </p>
        </div>
    )
}

export default Card;