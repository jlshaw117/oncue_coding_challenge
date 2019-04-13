import * as TruckUtils from '../util/truck_utils';

export const RECEIVE_TRUCKS = 'RECEIVE_TRUCKS';
export const RECEIVE_TRUCK = 'RECEIVE_TRUCK';
export const RECEIVE_TRUCK_ERRORS = 'RECEIVE_TRUCK_ERRORS';

export const fetchTrucks = () => dispatch => {

    return (
        TruckUtils.fetchTrucks()
        .then(trucks => dispatch(receiveTrucks(trucks)),
        err => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const createTruck = (truck) => dispatch => {

    return (
        TruckUtils.createTruck(truck)
        .then(truck => dispatch(receiveTruck(truck)),
        err => dispatch(receiveErrors(err.responseJSON)))
    );
};

const receiveTruck = (truck) => {

    return ({
        type: RECEIVE_TRUCK,
        truck
    });
};

const receiveTrucks = (trucks) => {

    return ({
        type: RECEIVE_TRUCKS,
        trucks
    });
};

const receiveErrors = (errors) => ({
    type: RECEIVE_TRUCK_ERRORS,
    errors
});