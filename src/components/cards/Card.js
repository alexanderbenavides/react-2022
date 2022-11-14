import { useParams, useNavigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { cardAction } from '../../redux/actions/cardActions';
import { useEffect } from 'react';
import { fetchService } from '../../api/api';
import { urisConstants } from '../../utils/uri-constants';
const Card = () => {
    const { id } = useParams();
    const { user, isLoading, finishWithErrors, errorMessage } = useSelector( ({data}) => data );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchService(urisConstants(id).user));
    }, [dispatch, id]);
    const onClickButton = ()  => {
        navigate('/cards');
    }
    return (
        <>
        { user && !isLoading && <div className='ui raised very padded text container segment'
        style={{marginTop: '80px'}}>
            <h3 className='ui header'>Nombre: {user.name}</h3>
            <p> Celular {user.phone} </p>
           <button className='ui button' onClick={onClickButton}> Regresar </button>
        </div>}
        {
          finishWithErrors && <p> {errorMessage} </p>
        }
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => {dispatch(cardAction(id))}
    }
}
export default connect(mapDispatchToProps)(Card);