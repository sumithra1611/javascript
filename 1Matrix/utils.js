let app = document.getElementById("app")
function create(element1,text1 = "", plsholder = "",parent = app){
    let ele1 = document.createElement(element1)
    ele1.textContent = text1
    ele1.placeholder = plsholder
    parent.appendChild(ele1)
    
    return ele1

}
