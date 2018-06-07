
const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch weathe for',
        string: true
    }
    
})

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyAcQFzBNinLOWtCnB5wc7HEvtvYvJYUaac',
    json: true
}, (error, response, body) => {
    console.log(`address: ${body.results[0].formatted_address}`);
    console.log(`latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`longitude: ${body.results[0].geometry.location.lng}`);
});



