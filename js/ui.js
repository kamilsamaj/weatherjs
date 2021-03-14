class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = this.#capitalize(weather.weather[0].description);
        this.icon.setAttribute('src',
            `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}, ${weather.wind.deg} deg`;
    }

    // Helper method capitalizing each word in a message
    #capitalize(message) {
        let capitalizedWords = [];
        message.split(' ').forEach(word => {
            capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
        });
        return capitalizedWords.join(' ');
    }
}
