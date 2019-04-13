import React from 'react';
import TimeInput from '../time/time_input';

class TruckForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.truck;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentWillUnmount() {
        this.props.clearTruckErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        let truck = {};
        truck.name = this.state.name;
        // if (this.state.start_suffix === 'pm') {
        //     truck.truck_start = parseInt(this.state.start_hour) + 12;
        // } else {
        //     truck.truck_start = parseInt(this.state.start_hour);
        // }
        // if (this.state.end_suffix === 'pm') {
        //     truck.truck_end = parseInt(this.state.end_hour) + 12;
        // } else {
        //     truck.truck_end = parseInt(this.state.end_hour);
        // }
        if (this.state.start_suffix === 'pm' && this.state.start_hour !== '12') {
            truck.truck_start = parseInt(this.state.start_hour) + 12;
        } else if (this.state.start_suffix === 'am' && this.state.start_hour === '12') {
            truck.truck_start = parseInt(this.state.start_hour) + 12;
        } else {
            truck.truck_start = parseInt(this.state.start_hour);
        }
        if (this.state.end_suffix === 'pm' && this.state.end_hour !== '12') {
            truck.truck_end = parseInt(this.state.end_hour) + 12;
        } else if (this.state.end_suffix === 'am' && this.state.end_hour === '12') {
            truck.truck_end = parseInt(this.state.start_hour) + 12;
        } else {
            truck.truck_end = parseInt(this.state.end_hour);
        }
        this.props.createTruck(truck).then(() => this.props.history.push('/trucks'));
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
            <div className='truck-form-wrapper'>
                <form onSubmit={this.handleSubmit}>
                <h2>Create A New Truck</h2>
                    {this.props.errors.length ? errorMessage() : <span></span>}
                    <label>Name Of Truck</label>
                    <input type="text" 
                        placeholder='Truck name' 
                        onChange={this.update('name')} 
                        value={this.state.name}
                        required/>
                    <TimeInput update={this.update}/>
                    <button type="submit">Create Truck</button>
                </form>
            </div>
        )
    }
}

export default TruckForm;