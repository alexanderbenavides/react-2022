import { useParams, useNavigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { cardAction } from '../../redux/actions/cardActions';
import { useEffect } from 'react';
import { fetchService } from '../../api/api';
import { urisConstants } from '../../utils/uri-constants';
const User = () => {
    const { id } = useParams();
    const { user, isLoading, finishWithErrors, errorMessage } = useSelector( ({data}) => data );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchService(urisConstants(id).user));
    }, [dispatch, id]);
    const goBack = ()  => {
        navigate('/users');
    }
    return (
        <>
         <div className='mt-2 d-flex justify-content-center'>
            { user && !isLoading && !finishWithErrors &&
            <div className='card-container'>
                    <div style={{width: '18rem'}} className="card mb-2" key= {user.id}>
                        <div className="card-body">
                        <h5 className="card-title">Nombre: {user.name}</h5>
                        <p className="card-text">Celular: {user.phone}</p>
                        <div className='d-flex justify-content-around'>
                            <button className='btn btn-info text-white' onClick={goBack}>Regresar</button>
                        </div>
                        </div>
                    </div>
            </div> 
            }
            {
            finishWithErrors && <p className='text-danger'> {errorMessage} </p>
            }
         </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => {dispatch(cardAction(id))}
    }
}
export default connect(mapDispatchToProps)(User);