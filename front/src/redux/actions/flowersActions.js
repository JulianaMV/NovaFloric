import ACTIONS from './types'
import ObjectID from 'bson-objectid';


const flowersActions = {

    load: (flowers)=>({
        type: ACTIONS.flowers.LOAD,
        payload: flowers,
        meta: { 
            offline: { 
                effect: { 
                    url:'http://localhost:3010/flower/g',
                    method:'GET',
                },
                commit: { 
                    type: ACTIONS.flowers.COMMIT,
                    meta: flowers
                },
                rollback: {
                    type: ACTIONS.flowers.ROLLBACK,
                     meta: flowers
                }
            }
        }
    }),
    add: (flower) => {
        flower._id = ObjectID().toHexString();
        
        return {
            type: ACTIONS.flower.ADD,
            payload: flower,
            meta: { 
                offline: { 
                    effect: { 
                        url:'http://localhost:3010/flower/cre',
                        method:'POST',
                        json: flower
                    },
                    commit: { 
                        type: ACTIONS.flower.COMMIT,
                        meta: flower 
                    },
                    rollback: {
                        type: ACTIONS.flower.ROLLBACK,
                         meta: flower
                    }
                }
            }
        }
    }
}

export default flowersActions;
