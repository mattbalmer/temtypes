import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from '@client/reducers';

export let store = createStore(reducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
  )
);