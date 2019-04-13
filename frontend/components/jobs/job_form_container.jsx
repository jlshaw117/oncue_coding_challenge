import {connect} from 'react-redux';
import JobForm from './job_form';
import {createJob, clearJobErrors} from '../../actions/job_actions';

const mapStateToProps = ({errors}) => {

    return ({
        job: {
            name_of_user: '',
            date_of_move: '',
            start_hour: '1',
            start_suffix: 'am',
            end_hour: '1',
            end_suffix: 'am'
        },
        errors: errors.job
    });
};

const mapDispatchToProps = dispatch => {

        return ({
            createJob: (job) => dispatch(createJob(job)),
            clearJobErrors: () => dispatch(clearJobErrors())
        });
};

export default connect(mapStateToProps, mapDispatchToProps)(JobForm);