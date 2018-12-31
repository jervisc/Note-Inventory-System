console.log('Starting note.js');

const fs = require('fs');

var fetchNode = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return  JSON.parse(notesString);
  }catch (e){
    return [];
  }
};

var saveNodes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNode();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNodes(notes);
    return note;
  };
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
