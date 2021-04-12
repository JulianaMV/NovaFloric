import api from '../../services/api'
import buquesActions from '../actions/buquesActions';

const buqueThunks = {

  load: () => async (dispatch) => {

    const request = await api.get("/buq/");

    const { buques } = request.data;

    let data = [];
    
    if(buques)
    data = buques;
    
    
    return dispatch(buquesActions.load(data));
  }

};

export default buqueThunks;
