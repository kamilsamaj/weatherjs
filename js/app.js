const weather = new Weather('Prague', 'CZ');

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.error(err));
