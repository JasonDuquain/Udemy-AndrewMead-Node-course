
const fs = require('fs');


var fetchNotes = () => {
    try {
        // the below 2 lines ensure new entries get appended as opposed to having existing lines removed and just the latest node added
        var notesString = fs.readFileSync('notes-data.json'); // put this is the try blk in case the json file does not exist yet
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
    
    // if duplicateNotes arr has any items (if the filter returns true) then the note already exists and it should not be added
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
    
};

var getAll = () => {
    console.log('getting all notes');
};

var getNote = (title) => {
    let notes = fetchNotes(); // store an arr of all the notes
    let filteredNotes = notes.filter((note) => note.title === title); // return true if the title passed in matches a title in the notes arr
    return filteredNotes[0]; // there is a chance this 1st item doesnt exist and returns undefined, in which case the else clause runs
};

var removeNote = (title) => {
    let notes = fetchNotes(); // store an arr of all the notes
    let filteredNotes = notes.filter((note) => note.title !== title); // filteredNotes is populated with all the of notes whose titles do not match the title passed in 
    saveNotes(filteredNotes); 
    
    return notes.length !== filteredNotes.length; //compare length of original notes arr to the filtered notes arr. If the remove note fn returns true that means a note was removed. If it returns false that means a note was not removed (they are eq). If they are not eq it is going to return true which is what we want beacuse a note was removed 
};

var logNote = (note) => {
    console.log('-----')
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
};

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
    logNote: logNote
}





