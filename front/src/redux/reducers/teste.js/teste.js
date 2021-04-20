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
              newState=[]
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
              
              case ACTIONS.buques.CLEAR:
                  return inicialState;

              case ACTIONS.buques.ATUALIZE_FLOWER:
                var {flower, buqueId} = payload;

                // Encontrar o buque
                newState = state.map(buq => {
                  // Encontrou o buque
                  if(buq?._id === buqueId)  {
                         
                    // Encontrar a flor que vai ser atualizada
                    var newFlowers = buq.flowers.map(flor => {
                      // Encontrou a flor
                      if(flor?._id === flower._id)  
                        return {...flor, ...flower}
                      
                      return flor;
                    })

                    return {...buq, flowers: newFlowers}
                  }
                  return buq;
                })


                return newState;

             default:
              break;
    }
    return state;
}

export default buque

