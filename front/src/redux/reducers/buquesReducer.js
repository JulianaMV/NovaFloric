import ACTIONS from '../actions/types'

const inicialState=[];

const buque = (state = inicialState, action) => {
    let newState;
    const {type, payload} = action
    switch (type) {
        case ACTIONS.buques.LOAD:
            return payload.map(buque => ({...buque,  isOffline:false}))

        case ACTIONS.buques.ADD:
            return [...state,{ 
                ...payload,
                isOffline:false
            }]
            case ACTIONS.buques.LOADONE:
                var found = false;
                newState = state.map(buque => {
                  if(buque?._id === payload._id)  {
                    found = true;
                    return {...buque, isOffline: false}
                  }
                  return buque;
                })
                
                if(found)
                  return newState;
                else return [...state, { ...payload, isOffline: false}]
          
        
        default:
            break;
    }
    return state;
}

export default buque

