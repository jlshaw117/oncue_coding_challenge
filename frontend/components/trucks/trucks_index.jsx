import React from 'react';
import Truck from './truck';

class TruckIndex extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrucks();
        this.props.fetchJobs();
    }

    render() {

        let trucks = this.props.trucks.map((truck, idx) => {

            return (
                <li key={idx}>
                    <Truck truck={truck} jobs={this.props.jobs}/>
                </li>
            )
        });
        return (
            <ul className='truck-list'>
                {trucks}
            </ul>
        );
    }
}

export default TruckIndex;