export const actionTypes = {
    DELETE_CARD: 'DELETE_CARD'
}

export const cardAction = id => {
    return {
        id,
        type: actionTypes.DELETE_CARD
    }
} 