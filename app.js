const express = require('express')
const geocode = require('./geocode')
const app = express()

app.use(express.static('./public'))
app.get('/weather', (req, res) => {
    console.log('hey')
    let address = req.query.address;
    console.log(address)
    geocode(address, (error, response) => {
        if (error) res.send(JSON.stringify({ error }))
        else {
            res.send(JSON.stringify(response))
            // res.send(JSON.stringify({ location, result }))
        }
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})