import api from '../../services/api'
import flowersActions from '../actions/flowersActions';

const flowersThunks = {

  load: () => async (dispatch) => {

    const flowers = await api.get("/flower/g")
    return dispatch(flowersActions.load(flowers.data));
  }

};

export default flowersThunks;
