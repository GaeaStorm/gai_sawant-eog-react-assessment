import "isomorphic-fetch";

const drone = async () => {

    console.log("Drone_api");

    // Polling the drone Api
    const response = await fetch(
        `https://react-assessment-api.herokuapp.com/api/drone/`
    );
    if (!response.ok) {
        return {error: {code: response.status}};
    }
    const json = await response.json();
    return {data: json};
};

export default drone;
