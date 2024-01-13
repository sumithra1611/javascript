let app = document.getElementById("app")
function create(tagName,parent=document.body,obj={}){
    let element = document.createElement(tagName)
    parent.appendChild(element)

    Object.keys(obj).forEach(key =>{
        element[key] = obj[key]
    })
    return element
}