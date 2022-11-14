import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearData, fetchService, removeItem } from '../../api/api';
import { urisConstants } from '../../utils/uri-constants';
const Cards = () => {
    const dispatch = useDispatch();
    const { users, isLoading, finishWithErrors, errorMessage } = useSelector(({data}) => data);
    useEffect(() => {
        dispatch(fetchService(urisConstants().users));
    }, [dispatch]);

    const removeAll = () => {
        dispatch(clearData());
    }

    const removeUser = (user) => {
      dispatch(removeItem(user.id));
    }
    return (
        <>
          {!isLoading && (<button className='ui button' onClick={removeAll}>Limpiar</button>)}
          {
            !isLoading && users.map(user => (
                <div className='ui raised very padded text container segment'
                    style={{marginTop: '80px'}} key= {user.id}>
                    <h3 className='ui header'>Nombre: {user.name}</h3>
                    <p> Celular {user.phone} </p>
                    <Link to={`${user.id}`}><button className='ui button'>Ver detalle</button></Link>
                    <button className='ui button red' onClick={ () => removeUser(user)}>Eliminar</button>
                </div>

            ))
          }
          {
            finishWithErrors && <p> {{errorMessage}} </p>
          }
        </>
    )
}

export default Cards;
// export default connect(mapStateToProps)(Cards);

// const connect = mapS => c => < c  cards= {[]} />