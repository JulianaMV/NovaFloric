import ACTIONS from './types'
import ObjectID from 'bson-objectid';

// const createFormData = ( body ) => {
//     const data = new FormData();
//     Object.keys(body).forEach(key => {
//       data.append(key, body[key]);
//     });
  
//     return data;
//   };

const buquesActions = {

    load: (buques)=>({
        type: ACTIONS.buques.LOAD,
        payload: buques,
        meta: { 
            offline: { 
                effect: { 
                    url:'http://localhost:3010/buq/',
                    method:'GET',
                    json: buques
                },
                commit: { 
                    type: ACTIONS.buques.COMMIT,
                    meta: buques
                },
                rollback: {
                    type: ACTIONS.buques.ROLLBACK,
                     meta: buques
                }
            }
        }
    }),
    add: (buque) => {
        buque._id = ObjectID().toHexString();
        
        return {
            type: ACTIONS.buques.ADD,
            payload: buque,
            meta: { 
                offline: { 
                    effect: { 
                        url:'http://localhost:3010/buq/',
                        method:'POST',
                        json: buque
                    },
                    commit: { 
                        type: ACTIONS.buques.COMMIT,
                        meta: buque 
                    },
                    rollback: {
                        type: ACTIONS.buques.ROLLBACK,
                         meta: buque
                    }
                }
            }
        }
    }
}

export default buquesActions;
