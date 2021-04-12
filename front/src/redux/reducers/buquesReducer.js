import ACTIONS from '../actions/types'

const inicialState=[];

const buque = (state = inicialState, action) => {
    const {type, payload} = action
    switch (type) {
        case ACTIONS.buques.LOAD:
            return payload.map(buque => ({...buque,  isOffline:false}))

        case ACTIONS.buques.ADD:
            return [...state,{ 
                ...payload,
                isOffline:false
            }]
        
        default:
            break;
    }
    return state;
}

export default buque

