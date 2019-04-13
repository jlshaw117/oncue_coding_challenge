import React from 'react';

function Truck ({truck, jobs}) {

    let jobs = truck.jobs.map((job_id, idx) => {
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
                {jobs}
            </ul>
        </div>
    )
}

export default Truck;