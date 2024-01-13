/**
 * 
 * @param {string} element 
 * @param {string} text 
 * @param {string} parent 
 * @returns 
 */
function create(element, text="", parent=document.app){
    let ele = document.createElement(element)
    ele.textContent = text
    parent.appendChild(ele)
    return ele
}

