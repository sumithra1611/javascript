let app = document.getElementById("app")
function create(element1,text1 = "", plsholder = "",parent = app){
    let ele1 = document.createElement(element1)
    let ele2 = document.createElement("br")
    ele1.textContent = text1
    ele1.placeholder = plsholder
    parent.appendChild(ele1)
    parent.appendChild(ele2)
    
    return ele1

}
