 /* *
  * @template { keyof HTMLElementTagNameMap } TagName
  * @param {TagName} tagName
  * @param {HTMLElement} parent
  * @param {Object} attr 
  * @returns {TagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[tagName] : HTMLElement}
  * */
function create(tagName, parent = document.body, attr = {}) {
    let element = document.createElement(tagName)
    parent.appendChild(element)

    Object.keys(attr).forEach(key => {
        element[key] = attr[key]
    })

    return element
}
let count = 1;
const num = Array(5).fill(null).map(() => Array(5).fill(null).map(_ => ({ val: count++, ele: null })))

//displaying game number creation
const displayNum = Array(5).fill(null).map(() => Array(5).fill(null).map(_ => ({ val: count++})))

for (let i = displayNum.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [displayNum[i], displayNum[j]] = [displayNum[j], displayNum[i]];
}

//game number display
let p = create("p")
p.id = "p"
document.getElementById("p").textContent = 0

// displayNum.forEach((val)=>{
//     setInterval(()=>{
//         document.getElementById('p').innerText = val
//     },10000)
// })

// function display(){

// }
// const updateNumber = setInterval(display,10000)

// for(let i=0 ; i<25 ;i++){
//     setTimeout(function(){
//         document.getElementsByTagName("p").textContent = displayNum[i]
//     },10000)
// }
// const printNumber = (n)=>{
//     for(let i=0 ; i<25 ; i++){

//     }
// }
 
// shuffling the matrix
for (let i = num.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [num[i][j], num[j][i]] = [num[j][i], num[i][j]];
}

// creating the table
let table = create("table")
num.forEach((row) => {
    const tr = create("tr", table)
    row.forEach((col) => {
        const cell = create("td", tr, {
            textContent: col.val,
            onclick: () => {
                cell.style.backgroundColor = "red"
                check();
            }
        })
        col.ele = cell
    })
})

let checkedAreas = {
    row: [false, false, false, false, false],
    column: [false, false, false, false, false],
    diagonals: [false, false]
}

// checking for crossed lines

function check() {
    num.forEach((row, i) => {
        row.forEach((col, j) => {
            // check for row
            if (checkedAreas.row[i] === false) {
                checkedAreas.row[i] = row.every((col) => col.ele.style.backgroundColor === "red")
            }
            // check for column
            if (checkedAreas.column[j] === false) {
                checkedAreas.column[j] = num.every((row) => row[j].ele.style.backgroundColor === "red")
            }
           // check for left-to-right diagonal
            if (i === j && checkedAreas.diagonals[0] === false) {
                checkedAreas.diagonals[0] = num.every((row, i) => row[i].ele.style.backgroundColor === "red")
           }
            // check for right-to-left diagonal
            if (i + j === 4 && checkedAreas.diagonals[1] === false) {
                checkedAreas.diagonals[1] = num.every((row, i) => row[4 - i].ele.style.backgroundColor === "red")
            }
            
        })
    })
    //check winner
    let count =0
    checkedAreas.row.forEach((val)=>{
        if(val===true){
            count++
        }
    })
    checkedAreas.column.forEach((val)=>{
        if(val===true){
            count++
        }
    })
    checkedAreas.diagonals.forEach((val)=>{
        if(val===true){
            count++
        }
    })
    if(count>= 5){
        alert("won the game")
        // alert("won the game")
        console.log("winner")
    }
}

    
