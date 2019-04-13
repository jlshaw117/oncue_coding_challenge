import React from 'react';
import JobListItem from '../jobs/job_list_item';

function Truck ({truck, jobs}) {

    let jobsList = truck.jobs.map((job_id, idx) => {
        return (
            <li key={idx}>
                <JobListItem job={jobs[job_id]} />
            </li>
        )
    });

    return (
        <div className='truck-list-item'>
            <h3>{truck.name} assignments</h3>
            <ul className='jobs-list'>
                {jobsList}
            </ul>
        </div>
    )
}

export default Truck;