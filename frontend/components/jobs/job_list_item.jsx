import React from 'react';

function JobListItem ({job}) {
    let timeRange = '';

    if (job.start_time >= 12) {
        timeRange += job.start_time - 12 + 'pm';
    } else {
        timeRange += job.start_time + 'am';
    }
    timeRange += ' - ';

    if (job.end_time >= 12) {
        timeRange += job.start_time - 12 + 'pm';
    } else {
        timeRange += job.start_time + 'am';
    }
    
    return (
        <span>{job.name_of_user}, {job.date_of_move}, {timeRange}</span>
    )
}

export default JobListItem;