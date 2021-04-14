import api from '../../services/api'
import flowersActions from '../actions/flowersActions';

const flowersThunks = {

  load: () => async (dispatch) => {

    const flowers = await api.get("/flower/g")
    return dispatch(flowersActions.load(flowers.data));
  },

  loadOne: (id) => async (dispatch) => {

    const flower = await api.get(`/flower/${id}`) 
    console.log(flower)
    return dispatch(flowersActions.loadOne(flower.data));
  }

};

export default flowersThunks;
