import {connect} from 'react-redux';
import TruckForm from './truck_form';
import {createTruck} from '../../actions/truck_actions';
const mapStateToProps = ({errors}) => {

    return ({
        truck: {
            name: '',
            start_hour: '1',
            start_suffix: 'am',
            end_hour: '1',
            end_suffix: 'am'
        },
        errors: errors.truck
    });
};

const mapDispatchToProps = dispatch => {

    return ({
        createTruck: (truck) => dispatch(createTruck(truck))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TruckForm);