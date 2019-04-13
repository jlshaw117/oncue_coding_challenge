import {RECEIVE_JOB, RECEIVE_JOB_ERRORS} from '../actions/job_actions';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_JOB_ERRORS:
            return action.errors;
        case RECEIVE_JOB:
            return [];
        default:
            return state;
    }
};