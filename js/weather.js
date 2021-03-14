class Weather {
    constructor() {
        this._apitoken = "";
        this._loadApiKey().then((token) => {
            console.debug('Token loaded');
            this._apitoken = token;
        });
    }

    async _loadApiKey() {
        try {
            const response = await fetch('apitoken');
            if (response.status !== 200) {
                throw "Could not load the 'apitoken' local file";
            }
            return await response.text();
        } catch (e) {
            console.error(e);
        }
    }
}
