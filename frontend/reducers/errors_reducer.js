import { combineReducers } from 'redux';
import jobErrorsReducer from './job_errors_reducer';
import truckErrorsReducer from './truck_errors_reducer';

export default combineReducers({
    job: jobErrorsReducer,
    truck: truckErrorsReducer
});