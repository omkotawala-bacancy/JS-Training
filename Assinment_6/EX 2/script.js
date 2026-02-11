/*
    Create three <div> elements with the class box.
    Select all boxes using querySelectorAll and change the background color of each box to lightblue using forEach.
*/

const divs = document.querySelectorAll('.lightblue')
console.log(divs);
divs.forEach(item => {
    item.style.backgroundColor = "lightblue"
})