import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { NODE_ENV } from 'react-native-dotenv';

import rootReducer from './Reducers';

const middleware = [thunkMiddleware];

if (NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default (preloadedState: any) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  )
);