import {connect} from 'react-redux';
import TruckIndex from './trucks_index';

const mapStateToProps = ({entities}) => {
    let trucks = Object.values(entities.trucks);
    let jobs = Object.values(entities.jobs);
    return ({
        trucks,
        jobs
    });
};

const mapDispatchToProps = (dispatch) => {
    
    return ({
        fetchTrucks: () => dispatch(fetchTrucks)
    });
     
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckIndex);