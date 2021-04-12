import ACTIONS from '../actions/types'

const inicialState=[];

const local = (state = inicialState, action) => {
  const { type, payload } = action
  let newState;
  
  switch (type) {

    case ACTIONS.local.ADD:
      var found = false;
      newState = state.map(flower => {
        if(flower?._id === payload._id)  {
          found = true;
          return {...flower, qtd: flower.qtd + 1}
        }
        return flower;
      })
      
      if(found)
        return newState;
      else return [...state, { ...payload, qtd: 1 }]

    case ACTIONS.local.REMOVE:
      newState = []

      for (let i = 0; i < state.length; i++) {
        let flower = state[i];

        if(flower?._id === payload._id)  
          flower?.qtd > 1 && newState.push({...flower, qtd: flower.qtd - 1})
        else 
          newState.push(flower);
      }

      return newState;

    case ACTIONS.local.CLEAR:
      return inicialState;

    default:
      break;
  }
  return state;
}


export default local

