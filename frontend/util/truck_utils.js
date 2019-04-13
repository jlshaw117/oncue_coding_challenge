export const fetchTrucks = () => {

    return $.ajax({
        method: "GET",
        url: `api/trucks`
    }); 
};

export const createTruck = (truck) => {

    return $.ajax({
        method: "POST",
        url: `api/trucks`,
        data: { truck }
    });

};
