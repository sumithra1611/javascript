function create(element, text="", parent=document.body){
    let ele = document.createElement(element)
    ele.textContent = text
    parent.appendChild(ele)
    return ele
}
