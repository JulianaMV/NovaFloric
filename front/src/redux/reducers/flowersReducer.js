import ACTIONS from '../actions/types'

const inicialState=[];

const flower = (state = inicialState, action) => {
    const { type, payload } = action
    let newState;

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
        case ACTIONS.flower.LOADONE:
            var found = false;
            newState = state.map(flower => {
              if(flower?._id === payload._id)  {
                found = true;
                return {...flower, isOffline: false}
              }
              return flower;
            })
            
            if(found)
              return newState;
            else return [...state, { ...payload, isOffline: false}]
      
            case ACTIONS.flower.ATUALIZE:
                newState = state.map(flower => {
                  if(flower?._id === payload._id)  {
                    return {...flower, isOffline: false}
                  }
                  return flower;
                })
                
                  return newState;
            
        default:
            break;
    }
    return state;
}

export default flower

//{id: flower._id, title: flower.title, price: flower.price, qtd: flower.qtd}