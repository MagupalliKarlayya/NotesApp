const root = document.querySelector('.textconatiner');
const addButton = document.querySelector('.cickbutton');

// Load saved notes from local storage
document.addEventListener('DOMContentLoaded', loadNotes);

// Add a new note
addButton.addEventListener('click', addNote);

function addNote() {
    let newchild = document.createElement('div');
    newchild.classList.add('writtennote');
    root.appendChild(newchild);

    let textareachild = document.createElement('textarea');
    textareachild.classList.add('textbox');
    newchild.appendChild(textareachild);

    // Save note content on input
    textareachild.addEventListener('input', saveNotes);

    var img = document.createElement('img');
    img.src = "images/delete.png";
    newchild.appendChild(img);

    // Remove note on click and save updated notes
    img.addEventListener('click', () => {
        newchild.remove();
        saveNotes();
    });

    // Save the current state of notes
    saveNotes();
}

function saveNotes() {
    const notes = [];
    document.querySelectorAll('.textbox').forEach(textbox => {
        notes.push(textbox.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(noteContent => {
        let newchild = document.createElement('div');
        newchild.classList.add('writtennote');
        root.appendChild(newchild);

        let textareachild = document.createElement('textarea');
        textareachild.classList.add('textbox');
        textareachild.value = noteContent;
        newchild.appendChild(textareachild);

        // Save note content on input
        textareachild.addEventListener('input', saveNotes);

        var img = document.createElement('img');
        img.src = "images/delete.png";
        newchild.appendChild(img);

        // Remove note on click and save updated notes
        img.addEventListener('click', () => {
            newchild.remove();
            saveNotes();
        });
    });
}
