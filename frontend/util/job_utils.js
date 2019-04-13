export const fetchJobs = () => {

    return $.ajax({
        method: "GET",
        url: `api/jobs`
    }); 
};

export const createJob = (job) => {

    return $.ajax({
        method: "POST",
        url: `api/jobs`,
        data: { job }
    });
};