import {connect} from 'react-redux';
import TruckIndex from './trucks_index';
import {fetchTrucks} from '../../actions/truck_actions';
import {fetchJobs} from '../../actions/job_actions';

const mapStateToProps = ({entities}) => {
    let trucks = Object.values(entities.trucks);
    let jobs = entities.jobs;
    return ({
        trucks,
        jobs
    });
};

const mapDispatchToProps = (dispatch) => {
    
    return ({
        fetchTrucks: () => dispatch(fetchTrucks()),
        fetchJobs: () => dispatch(fetchJobs())
    });
     
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckIndex);