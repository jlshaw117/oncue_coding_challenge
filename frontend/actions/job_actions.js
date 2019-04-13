import * as JobUtils from '../util/job_utils';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_JOB = 'RECEIVE_JOB';
export const RECEIVE_JOB_ERRORS = 'RECEIVE_JOB_ERRORS';

export const fetchJobs = () => dispatch => {

    return (
        JobUtils.fetchJobs()
            .then(jobs => dispatch(receiveJobs(jobs)),
            err => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const createJob = (job) => dispatch => {

    return (
        JobUtils.createJob(job)
            .then(job => dispatch(receiveJob(job)),
            err => dispatch(receiveErrors(err.responseJSON)))
    );
};

const receiveJob = (job) => {

    return ({
        type: RECEIVE_JOB,
        job
    });
    
};

const receiveJobs = (jobs) => {

    return ({
        type: RECEIVE_JOBS,
        jobs
    });
};

const receiveErrors = (errors) => ({
    type: RECEIVE_JOB_ERRORS,
    errors
});