const weather = new Weather('Prague', 'CZ');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => {
            const ui = new UI(results);
            ui.paint(results);
        })
        .catch(err => console.error(err));
}
