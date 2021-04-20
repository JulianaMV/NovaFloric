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
                    url:'http://localhost:3011/buq/',
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
                        url:'http://localhost:3011/buq/',
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
    },
    clear: (buque) => ({
        type: ACTIONS.buques.CLEAR,
        payload: buque,
        meta: { 
            offline: { 
                effect: { 
                    url:`http://localhost:3011/buq/zerar/${buque._id}`,
                    method:'PUT',
                    json: buque
                }
            }
        }
      }),

    atualize:(buque)=>({
        type: ACTIONS.buques.ATUALIZE,
        payload: buque,
        meta: { 
            offline: { 
                effect: { 
                    url:`http://localhost:3011/buq/${buque._id}`,
                    method:'PUT',
                    json: buque
                }
            }
        }
    }),
    atualizeFlower:(buqueId, {_id, qtd })=>({
        type: ACTIONS.buques.ATUALIZE_FLOWER,
        payload: { buqueId, flower: {_id, qtd }},
        meta: { 
            offline: { 
                effect: { 
                    url:`http://localhost:3011/buq/flower/${buqueId}`,
                    method:'PUT',
                    json: {_id, qtd}
                }
            }
        }
    }),
    delete:(buque)=>({
        type: ACTIONS.buques.DELETE,
        payload: buque,
        meta: { 
            offline: { 
                effect: { 
                    url:`http://localhost:3011/buq/${buque._id}`,
                    method:'DELETE',
                }
            }
        }
    }),
    loadOne:(buque)=>({
        type: ACTIONS.buques.LOADONE,
        payload: buque,
        meta: { 
            offline: { 
                effect: { 
                    url:`http://localhost:3011/buq/${buque._id}`,
                    method:'GET',
                }
            }
        }
    })
}

export default buquesActions;
