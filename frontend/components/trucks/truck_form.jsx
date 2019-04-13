import React from 'react';
import TimeInput from '../time/time_input';

class TruckForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.truck;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let truck = {};
        truck.name = this.state.name;
        if (this.state.start_suffix === 'pm') {
            truck.truck_start = parseInt(this.state.start_hour) + 12;
        } else {
            truck.truck_start = parseInt(this.state.start_hour);
        }
        if (this.state.end_suffix === 'pm') {
            truck.truck_end = parseInt(this.state.end_hour) + 12;
        } else {
            truck.truck_end = parseInt(this.state.end_hour);
        }
        this.props.createTruck(truck).then(() => this.props.history.push('/trucks'));
    }

    update(field) {

        return (e) => {
            console.log(e.target.value, field);
            this.setState({[field]: e.target.value});
        };
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        placeholder='Truck name' 
                        onChange={this.update('name')} 
                        value={this.state.name}
                        required/>
                    <TimeInput update={this.update}/>
                    <input type="submit" value='Create Truck'/>
                </form>
            </div>
        )
    }
}

export default TruckForm;