const input = document.getElementById('input')
const saveBtn = document.getElementById('save')
const loadBtn = document.getElementById('load')
const RemBtn = document.getElementById('remove')
const result = document.getElementById('result')

function storeData(){
    if(input.value === ""){
        alert("Please Ennter something")
    }
    else{
        localStorage.setItem('username', input.value.trim())
        sessionStorage.setItem('username', input.value.trim())
        input.value = ""
    }
    
}

function loadData(){
    const localdata = localStorage.getItem('username')
    const p1 = document.createElement('p')
    p1.textContent = "Local Data :" + localdata;
    result.appendChild(p1)

    const sessiondata = sessionStorage.getItem('username')
    const p2 = document.createElement('p')
    p2.textContent = "Session Data :" + sessiondata;
    result.appendChild(p2)
}

function removeData(){
    localStorage.removeItem('username')
    sessionStorage.removeItem('username')
}

saveBtn.addEventListener('click', storeData)
loadBtn.addEventListener('click', loadData)
RemBtn.addEventListener('click', removeData)