const storage = new Storage();
const ui = new UI();

// Get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', ev => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);
    storage.setLocationData(city, country);

    // refresh the weather
    getWeather();

    // close the modal pop-up
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.error(err));
}
