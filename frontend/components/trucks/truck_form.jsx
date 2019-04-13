import React from 'react';

class TruckForm extends React.Component {

    constructor (props) {
        super(props);

        this.state = props.truck;

        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <select name="Start Time" onChange={this.update('start_hour')}>
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
                    </select>
                    <input type="submit" value='Create Truck'/>
                </form>
            </div>
        )
    }
}

export default TruckForm;