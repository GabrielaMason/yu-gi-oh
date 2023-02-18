
export const cardReducer = (state = [], action) => {
    console.log('ACTION', action)

    if (action.type === '@cards/init') {
        return action.payload
    }

    if (action.type === '@cards/created') {
        return [...state, action.payload]
    }

    if (action.type === '@cards/toggle_important') {
        const {id} = action.payload
        return state.map(card => {
            if (card.id === id) {
                return {
                    ...card
                }
            }
            return card
        })
    }
    return state
}

export const createCard = content => {
    return {
        type: '@cards/created',
        payload: {
            content
        }
    }
}

export const toggleImportanceOf = id => {
    return {
        type: '@cards/toggle_important', 
        payload: {id}
    }
}

export const initCards = cards => {
    return {
        type: '@cards/init',
        payload: cards
    }
}