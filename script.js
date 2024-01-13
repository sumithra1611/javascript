let box = create("div")

box.style.width = "200px"
box.style.height = "250px"
box.style.backgroundColor = "green"
let div = create("div")
div.innerHTML = "<br> <br>"


let button = create("button","click here")
let angle = 0
button.onclick = function (){
    angle+=45
    box.style.transform = 'rotate('+angle + 'deg)';
    //box.style.rotate = angle + 'deg'
    
}




