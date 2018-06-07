
const fs = require('fs');


var addNote = (title, body) => {
    console.log('adding note', title, body);
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





