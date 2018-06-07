
const fs = require('fs');


var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title: title,
        body: body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    var notes = fetchNotes(); // store an arr of all the notes
    var filteredNotes = notes.filter((note) => note.title === title); // return true if the title passed in matches a title in the notes arr
    return filteredNotes[0]; // there is a chance this 1st item doesnt exist and returns undefined, in which case the else clause runs
};

var removeNote = (title) => {
    var notes = fetchNotes(); // store an arr of all the notes
    var filteredNotes = notes.filter((note) => note.title !== title); // filteredNotes is populated with all the of notes whose titles do not match the title passed in 
    saveNotes(filteredNotes); 
    
    return notes.length !== filteredNotes.length; //compare length of original notes arr to the filtered notes arr. If the remove note fn returns true that means a note was removed. If it returns false that means a note was not removed (they are eq). If they are not eq it is going to return true which is what we want beacuse a note was removed 
};

var logNote = (note) => {
    console.log('----');
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
}


module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote: logNote
};




