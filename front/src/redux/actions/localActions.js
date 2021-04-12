import ACTIONS from './types';

const localActions = {
  
  add: (flower) => ({
    type: ACTIONS.local.ADD,
    payload: flower,
  }),

  remove: (flower) => ({
    type: ACTIONS.local.REMOVE,
    payload: flower,
  }),

  clear: () => ({
    type: ACTIONS.local.CLEAR,
  })
};

export default localActions;
