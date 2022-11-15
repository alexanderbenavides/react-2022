import { actionTypes } from "../actions/cardActions";

const initialState = {
    cards: [
        {
            id: 1,
            title: 'Alex',
            body: 'The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.'
        },
        {
            id: 2,
            title: 'Juan',
            body: 'The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.'
        },
        {
            id: 3,
            title: 'Pedro',
            body: 'The lorem ipsum is a placeholder text used in publishing and graphic design. This filler text is a short paragraph that contains all the letters of the alphabet.'
        }
    ]
}
const rootReducer = (state = initialState, action) => {
    if (action.type === actionTypes.DELETE_CARD) {
        const cards = state.cards.filter(card => card.id !== action.id);
        return {
            ...state,
            cards
        };
    }
    return state;
}

export default rootReducer;