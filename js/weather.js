class Weather {
    #apitoken = "";
    #weatherApi = "https://api.openweathermap.org/data/2.5";

    constructor(city, country) {
        this._loadApiKey().then(() => {
            console.debug('Token loaded');

        });
        this.city = city;
        this.country = country;
    }

    async _getCall(url) {
        console.log(url);
        if (this.#apitoken === "") {
            await this._loadApiKey();
        }
        // add the 'appid' QS params
        if (url.includes('?') === true) {
            url += `&appid=${this.#apitoken}`;
        } else {
            url += `?appid=${this.#apitoken}`;
        }

        console.log(this.#apitoken);
        return await fetch(url);
    }

    // Fetch weather from API
    async getWeather() {
        const response = await this._getCall(`${this.#weatherApi}/weather?q=${this.city},${this.country}`);
        return await response.json();
    }

    // Update location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

    async _loadApiKey() {
        try {
            const response = await fetch('apitoken');
            if (response.status !== 200) {
                throw "Could not load the 'apitoken' local file";
            }
            this.#apitoken = await response.text();
        } catch (e) {
            console.error(e);
        }
    }
}
