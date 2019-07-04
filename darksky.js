const request = require('request')

const key = 'baeb318d6fd713523ade6ce87b5cbead'
const exclude = 'exclude=minutely,hourly'
const deftURL = 'https://api.darksky.net/forecast/baeb318d6fd713523ade6ce87b5cbead/'

function forecast(latitude, longitude, callback) {
    url = deftURL + latitude + ',' + longitude + '?' + exclude
    request({ url, json: true }, (error, response) => {
        const body = response.body
        if (error) {
            callback('Unable to connect to weather services', undefined)
        }
        else if (!body) {
            callback('Unable to find the location', undefined)
        }
        else {
            console.log('darksky: ', body.latitude)
            //callback(undefined, { body.daily.data[0].summary })
            callback(undefined, body)
        }
    })

}

module.exports = forecast