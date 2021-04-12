import { createStore ,  applyMiddleware, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';

import reducers from './reducers';



const store = createStore(
    reducers,
    compose(
      applyMiddleware(logger, thunk),
      offline(offlineConfig)
    )
  );
export default store;
