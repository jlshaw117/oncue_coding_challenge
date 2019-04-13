import React from 'react';
import TimeInput from '../time/time_input';

class JobForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.job;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        let job = {};
        job.name_of_user = this.state.name_of_user;
        job.date_of_move = this.state.date_of_move;
        if (this.state.start_suffix === 'pm' && this.state.start_hour !== '12') {
            job.start_time = parseInt(this.state.start_hour) + 12;
        } else if (this.state.start_suffix === 'am' && this.state.start_hour === '12'){
            job.start_time = parseInt(this.state.start_hour) + 12;
        } else {
            job.start_time = parseInt(this.state.start_hour);
        }
        if (this.state.end_suffix === 'pm' && this.state.end_hour !== '12') {
            job.est_end_time = parseInt(this.state.end_hour) + 12;
        } else if (this.state.end_suffix === 'am' && this.state.end_hour === '12') {
            job.est_end_time = parseInt(this.state.start_hour) + 12;
        } else {
            job.est_end_time = parseInt(this.state.end_hour);
        }
        this.props.createJob(job).then(() => this.props.history.push('/trucks'));
    }

    update(field) {

        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    render() {

        const errorMessage = () => {
            return (
                <div className='error-message'>{this.props.errors[0]}</div>
            )
        };

        return (
            <div className='job-form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Create A New Job</h2>
                    {this.props.errors.length ? errorMessage() : <span></span>}
                    <label>Name</label>
                    <input type="text"
                        placeholder='User name'
                        value={this.state.name_of_user}
                        onChange={this.update('name_of_user')}
                        required/>
                    <label>Date Of Move</label>
                    <input type="date"
                        onChange={this.update('date_of_move')}
                        required/>
                    <TimeInput update={this.update} />
                    <button type="submit">Create Job</button>
                </form>
            </div>
        )
    }
}

export default JobForm;