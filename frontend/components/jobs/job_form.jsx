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
        if (this.state.start_suffix === 'pm') {
            job.start_time = parseInt(this.state.start_hour) + 12;
        } else {
            job.start_time = parseInt(this.state.start_hour);
        }
        if (this.state.end_suffix === 'pm') {
            job.est_end_time = parseInt(this.state.end_hour) + 12;
        } else {
            job.est_end_time = parseInt(this.state.end_hour);
        }
        console.log(job);
        this.props.createJob(job).then(() => this.props.history.push('/'));
    }

    update(field) {

        return (e) => {
            this.setState({[field]: e.target.value});
        };
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder='User name'
                        value={this.state.name_of_user}
                        onChange={this.update('name_of_user')}
                        required/>
                    <input type="date"
                        onChange={this.update('date_of_move')}
                        required/>
                    <TimeInput update={this.update} />
                    {/* <select name="Start Time" onChange={this.update('start_hour')}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select name="suffix" onChange={this.update('start_suffix')}>
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </select>
                    <select name="End Time" onChange={this.update('end_hour')}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <select name="suffix" onChange={this.update('end_suffix')}>
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </select> */}
                    <input type="submit"
                        value='Create Job'/>
                </form>
            </div>
        )
    }
}

export default JobForm;