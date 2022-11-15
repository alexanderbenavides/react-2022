import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearData, fetchService, removeItem } from '../../api/api';
import { urisConstants } from '../../utils/uri-constants';
const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const seeDetail = (user) => {
      navigate(`${user.id}`);
    }

    const fetchUsers = () => {
      if (users.length === 0) {
        dispatch(fetchService(urisConstants().users));
      }
    }

    return (
        <>
          <section className='mt-2 text-center'>
            {!isLoading && (
             <div>
                {
                  users.length > 0 && <button className='btn btn-primary' onClick={removeAll}>Limpiar</button>
                }
                {
                  users.length === 0 && <button style={{marginLeft: '0.5rem'}} className='btn btn-success' onClick={fetchUsers}>Listar</button>
                }
             </div> 
            )}
              <div className='cards-container'>
                {
                  !isLoading && users.map(user => (
                    <div style={{width: '18rem'}} className="card mb-2" key= {user.id}>
                      <div className="card-body">
                        <h5 className="card-title">Nombre: {user.name}</h5>
                        <p className="card-text">Celular: {user.phone}</p>
                        <div className='d-flex justify-content-around'>
                          <button className='btn btn-info text-white' onClick={() => seeDetail(user)}>Ver detalle</button>
                          <button className='btn btn-danger' onClick={() => removeUser(user)}>Eliminar</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            {
              finishWithErrors && <p className='text-danger mt-2'> {errorMessage} </p>
            }
          </section>
        </>
    )
}

export default Users;
// export default connect(mapStateToProps)(Users);
// const connect = mapS => C => < C  cards= {[]} />