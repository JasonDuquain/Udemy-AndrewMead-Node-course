
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('yargs:', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('cmd not recognized');
}












