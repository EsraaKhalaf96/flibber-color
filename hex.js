const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener("click" , function(){
let hexColor ='#'

for(let i=0; i<6; i++){
    // debugger
    // const random = Math.floor(Math.random() * hex.length);
    hexColor += hex[getRandomNumber()]
}
document.body.style.backgroundColor=hexColor;
color.textContent =hexColor
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
    // return Math.random()
}