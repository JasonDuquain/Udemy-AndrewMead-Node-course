
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
   descibe: 'title of note',
   demand: true,
   alias: 't'
}

const bodyOptions = {
    descibe: 'body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'add a new note', {
       title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'list all notes')
    .command('read', 'read a note', {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
    
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        notes.logNote(note);
    } else {
        console.log('note not found') 
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'note not found';
    console.log(message);
} else {
    console.log('cmd not recognized');
}










