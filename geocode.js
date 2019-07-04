const request = require('request')
const forecast = require('./darksky')
const token = '914852e7213ba9'

const url = 'https://us1.locationiq.com/v1/search.php?key=' + token + '&q=Hyderabad&format=json'

function geocode(address, callback) {
    const url = 'https://us1.locationiq.com/v1/search.php?key=' + token + '&q=' + address + '&format=json'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (body.error) {
            callback('Unable to find the location', undefined)
        }
        else {
            latitude = body[0].lat
            longitude = body[0].lon
            location = body[0].display_name
            forecast(latitude, longitude, (error, result) => {
                if (error) callback(error, undefined)
                else {
                    let output = {
                        location: location,
                        summary: result.daily.summary,
                        temperature: result.currently.temperature,
                        current: result.currently.summary
                    }
                    callback(undefined, output)
                }
            })

        }
    })

}
module.exports = geocode;