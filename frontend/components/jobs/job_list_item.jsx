import React from 'react';

function JobListItem ({job}) {
    let timeRange = '';
    if (job) {
        if (job.start_time >= 12 && job.start_time < 24) {
            if (job.start_time === 12) {
                timeRange += job.start_time + 'pm';
            } else {
                timeRange += (job.start_time - 12) + 'pm';
            }
            
        } else {
            if (job.start_time === 24) {
                timeRange += (job.start_time - 12) + 'am';
            } else {
                timeRange += job.start_time + 'am';
            }
            
        }
        timeRange += ' - ';
    
        if (job.est_end_time >= 12) {
            timeRange += job.est_end_time - 12 + 'pm';
        } else {
            timeRange += job.est_end_time + 'am';
        }
        return (
            <span>{job.name_of_user}, {job.date_of_move}, {timeRange}</span>
        )
    }
    return <span></span>

}

export default JobListItem;