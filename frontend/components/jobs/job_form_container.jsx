import {connect} from 'react-redux';
import JobForm from './job_form';
import {createJob} from '../../actions/job_actions';

const mapStateToProps = state => {

    return ({
        job: {
            name_of_user: '',
            date_of_move: '',
            start_hour: '1',
            start_suffix: 'am',
            end_hour: '1',
            end_suffix: 'am'
        }
    });
};

const mapDispatchToProps = dispatch => {

        return ({
            createJob: (job) => dispatch(createJob(job))
        });
};

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);