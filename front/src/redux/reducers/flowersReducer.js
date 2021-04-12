import ACTIONS from '../actions/types'

const inicialState=[];

const flower = (state = inicialState, action) => {
    const { type, payload } = action

    switch (type) {
        case ACTIONS.flowers.LOAD:
            
            return payload.map(flower => ({
                ...flower,
                isOffline: false
            }))

        case ACTIONS.flower.ADD:
            return [...state,{ 
                ...payload,
                isOffline:true
            }]
        default:
            break;
    }
    return state;
}

export default flower

