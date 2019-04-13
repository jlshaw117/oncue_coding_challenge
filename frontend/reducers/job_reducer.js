import {RECEIVE_JOB, RECEIVE_JOBS} from '../actions/job_actions';

export default (state= {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_JOB:
            newState[action.job.id] = action.job;
            return newState;
        case RECEIVE_JOBS:
            return action.jobs;
        default:
            return state;
    }
};