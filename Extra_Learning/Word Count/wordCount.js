const str = document.getElementById('sentence')
const btn = document.getElementById('btn')
let ul = document.getElementById('list')

function objectCreation(){
    if(str.value !== ""){
        let sentence = str.value.split(" ")
        return sentence.reduce((acc,val) => {

            if(acc[val]){
                acc[val] += 1
            }
            else{
                acc[val] = 1
            }
            return acc
        }, {}) 
    }
    else{
        
        let li = document.createElement('li')
        li.textContent = "Please Enter the sentence";
        ul.appendChild(li)
        return null;
    } 
}


function wordCount(){
    ul.innerHTML = ""
    const count = objectCreation();
    console.log(count)
    for (const key in count) {
        
        let li = document.createElement('li')
        li.textContent = `${key} : ${count[key]}`;
        ul.appendChild(li)
        
    }
    str.value = ""

}

btn.addEventListener('click', wordCount)