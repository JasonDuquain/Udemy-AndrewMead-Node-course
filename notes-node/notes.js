
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
    console.log('getting note', title);
};

var removeNote = (title) => {
    
};



module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
}





