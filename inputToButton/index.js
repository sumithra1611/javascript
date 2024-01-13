let app = document.getElementById("app")
let input = create("input")
input.placeholder = "enter any color"

let btn = create("button")
btn.textContent = "input will display here"
let color= ""

input.oninput = function(){
    btn.textContent = input.value
    color=input.value
}
button.onclick = function(){
    document.body.style.backgroundColor = color
}










