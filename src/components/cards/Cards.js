import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { cardAction } from '../../redux/actions/cardActions';
const Cards = () => {
    const dispatch = useDispatch();
    const { cards } = useSelector(({rootReducer}) => rootReducer);


    const removeCard = (user) => {
      dispatch(cardAction(user.id));
    }

    return (
        <>
          <section className='mt-2 text-center'>
              <div className='cards-container'>
                {
                  cards.map(card => (
                    <div style={{width: '18rem'}} className="card mb-2" key= {card.id}>
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.body}</p>
                        <div className='d-flex justify-content-around'>
                          <button className='btn btn-danger' onClick={() => removeCard(card)}>Eliminar</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
          </section>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
  return {
      deleteCard: (id) => {dispatch(cardAction(id))}
  }
}
export default  connect(mapDispatchToProps)(Cards);
// export default connect(mapStateToProps)(Cards);

// const connect = mapS => c => < c  cards= {[]} />