import { combineReducers } from 'redux';
import truckReducer from './truck_reducer';
import jobReducer from './job_reducer';

export default combineReducers({
    trucks: truckReducer,
    jobs: jobReducer
});