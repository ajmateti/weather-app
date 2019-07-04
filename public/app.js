var weatherform = document.querySelector('form')
var search = document.querySelector('input')
var message1 = document.querySelector('#message-1')
var message2 = document.querySelector('#message-2')
var message3 = document.querySelector('#message-3')


weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    var location = search.value
    message3.textContent = 'loading...'
    message1.textContent = ''
    message2.textContent = ''
    if (location === '') {
        message3.textContent = 'Please enter a location'
    }
    else {
        fetch('http://localhost:3000/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log('error:', data.error)
                    message3.textContent = data.error
                }
                else {
                    console.log(data.location, data.summary, data.temperature, data.current)
                    message1.textContent = data.current
                    message2.textContent = 'Temperature is currently ' + data.temperature + ' degrees'
                    message3.textContent = data.summary
                    search.value = data.location
                }
            })
        })
    }
})