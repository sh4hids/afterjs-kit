import { combineReducers } from "redux";

import counterReducer from '../components/Counter/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
