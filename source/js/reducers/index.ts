import { combineReducers } from 'redux';
import { ReduxReducer } from '@client/reducers/ReduxReducer';

const reducers = combineReducers({
  redux: ReduxReducer,
});

export default reducers;