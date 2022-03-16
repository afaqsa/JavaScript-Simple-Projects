

const addButton = document.querySelector('#add');

const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) => {
        if (note.value != '')
        return notes.push(note.value);
    });
    localStorage.setItem('notes',JSON.stringify(notes));
}


const NewNote = (text = '') => {
    
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
        <div class="tools">
          <button type="button" class="edit" name="button"><i class="fa fa-edit "></i></button>
          <button type="button" class="delete" name="button"><i class="fa fa-trash "></i></button>

        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden": ""}"></textarea>
    `;
    note.insertAdjacentHTML('afterbegin', htmlData);
    
    const editbutton = note.querySelector('.edit');
    const delbutton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    delbutton.addEventListener('click', () => {
        note.remove();
        updateLSData();
    });
    textarea.value = text;
    mainDiv.innerHTML = text;

    editbutton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

    });
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        updateLSData();
    });




    document.body.appendChild(note);
} 
const getnotes = JSON.parse(localStorage.getItem('notes'));
if (getnotes) {
    getnotes.forEach((note) => NewNote(note));
}
addButton.addEventListener('click', () => NewNote());