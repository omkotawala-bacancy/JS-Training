const ititle = document.getElementById('title');
const idescription = document.getElementById('Description');
const add = document.getElementById('Add');
const resdiv = document.getElementById('notes')
const edit_coontainer = document.getElementById('modal-container')
const close = document.getElementById('close-span')
const save = document.getElementById('modal-edit-save')
const etitle = document.getElementById('modal-edit-title');
const edescription = document.getElementById('modal-edit-description');
let noteid = null

const notes = JSON.parse(localStorage.getItem('notes')) || []

function renderNotes(array, div) {

    div.innerHTML = ""
    array.forEach((element, index) => {
        const { id, title, description } = element

        const maindiv = document.createElement('div')
        maindiv.setAttribute('id', `div: ${id}`)
        maindiv.setAttribute('class', "notes_div")


        const notetitle = document.createElement('p')
        notetitle.textContent = title
        notetitle.setAttribute('id', `tit:${id}`)
        notetitle.style.fontSize = "20px"
        notetitle.style.fontWeight = "bold"

        const notedis = document.createElement('p')
        notedis.textContent = description
        notedis.setAttribute('id', `diss:${id}`)

        const delBtn = document.createElement('button')
        delBtn.textContent = "Delete"
        delBtn.setAttribute('id', `del:${id}`)
        delBtn.dataset.index = index

        const editBtn = document.createElement('button')
        editBtn.textContent = "Edit"
        editBtn.setAttribute('id', `edit:${id}`)

        maindiv.append(notetitle, notedis, delBtn, editBtn)
        resdiv.appendChild(maindiv);

    });
}

function addNotes() {
    notes.push({
        id: crypto.randomUUID(),
        title: ititle.value,
        description: idescription.value
    })
}

function saveData() {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function deletNote(index) {
    notes.splice(index, 1)
    saveData()
    renderNotes(notes, resdiv)
}

add.addEventListener('click', () => {
    if (ititle.value) {
        addNotes()
        saveData()
        renderNotes(notes, resdiv)
        ititle.value = ""
        idescription.value = ""
    }
})

resdiv.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.id.includes("del")) {
            console.log(e.target.tagName);
            const index = e.target.dataset.index
            deletNote(index)
        }
    }
})

resdiv.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.id.includes("edit")) {

            edit_coontainer.style.display = 'flex'

            const idd = e.target.id.split(':')

            const [note] = notes.filter(item => {
                return item.id === idd[1]
            })
            noteid = note.id
            console.log(noteid);

            etitle.value = note.title;
            edescription.value = note.description;

            
        }
    }
})

save.addEventListener('click', () => {

    for (const item of notes) {
        if(item.id === noteid){
            console.log(item);
            item.title = etitle.value
            item.description = edescription.value
        }
    }
    saveData()
    renderNotes(notes, resdiv)
    edit_coontainer.style.display = 'none'
})



close.addEventListener('click', () => {
    edit_coontainer.style.display = 'none'
})
renderNotes(notes, resdiv)