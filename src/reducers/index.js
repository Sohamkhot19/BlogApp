// reducers/index.js
import { combineReducers } from 'redux';
import sessionReducer from './sessionreducer';

const rootReducer = combineReducers({
  session: sessionReducer
  // Add more reducers here if needed
});

export default rootReducer;
