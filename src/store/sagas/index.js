import WeatherSagas from "./Weather";
import DroneSagas from "./Drone";
import ApiErrors from "./ApiErrors";
console.log("Sagas index")
export default [...ApiErrors, ...WeatherSagas, ...DroneSagas];
