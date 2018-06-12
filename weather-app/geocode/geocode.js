
const request = require('request');

let geocodeAddress = (address, callback) => {
    
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAcQFzBNinLOWtCnB5wc7HEvtvYvJYUaac`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('unable to connect to google\'s servers');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        } 

    });
    
}


module.exports.geocodeAddress = geocodeAddress