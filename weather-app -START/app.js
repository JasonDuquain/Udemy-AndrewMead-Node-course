// start at 12:55 of cb fns and APIs
// 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyAcQFzBNinLOWtCnB5wc7HEvtvYvJYUaac'
// ENCODED: url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAcQFzBNinLOWtCnB5wc7HEvtvYvJYUaac`,

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
.help()
.alias('help', 'h')
.argv;





