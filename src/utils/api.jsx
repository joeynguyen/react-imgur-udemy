var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var ApiKey = require('./api-key');

module.exports = {
    get: function(url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + ApiKey
            }
        })
        .then(function(response) {
            return response.json();
        })
    }
}


