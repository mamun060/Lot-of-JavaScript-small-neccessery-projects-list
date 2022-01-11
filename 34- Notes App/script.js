//1st step
const addBtn = document.getElementById('add')
//5th step
const notes = JSON.parse(localStorage.getItem('notes'))
//console.log(notes)
if(notes) {
    notes.forEach(note => addNewNote(note))
}

//2nd step
addBtn.addEventListener('click', () => addNewNote())
//3rd step
function addNewNote(text = '') {
    const note = document.createElement('div') //1st
    note.classList.add('note')
    //2nd
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    //4th
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')
    //6th
    textArea.value = text
    main.innerHTML = marked(text)
    //5th
    deleteBtn.addEventListener('click', () => {
        note.remove()
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    //7th
    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)
        updateLS()
    })
//3rd
    document.body.appendChild(note)
}

// localStorage.setItem('name', 'Mamun')
// localStorage.getItem('name')
// localStorage.removeItem('name')

//4th step
function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))
    // console.log(notes)
    localStorage.setItem('notes', JSON.stringify(notes))
}