import {RECEIVE_TRUCK, RECEIVE_TRUCKS} from '../actions/truck_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TRUCK:
            newState[action.truck.id] = action.truck;
            return newState;
        case RECEIVE_TRUCKS:
            return action.trucks;
        default:
            return state;
    }
};