/* *
  * @template {keyof HTMLElementTagNameMap} TagName
/**
  * @param {TagName} tagName
  * @param {HTMLElement} parent
  * @param {Object} attr 
  * @returns {TagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TagName] : HTMLElement}
  * */

let number = [];

for(let i = 0 ;i<25;i++){
    number[i] = i+1;
} 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(number);


let table = create("table",app)


const num = Array(5).fill(null).map(() => Array(5).fill(null))
let tempNum = num
console.log(tempNum)
let k = 0;
let trun =true
let count =0

num.forEach((row,i)=>{
    const tr = create("tr",table)
    row.forEach((col,j)=>{
        const cell = create("td",tr)
        cell.textContent = number[k];
        k++;
        cell.onclick = ()=>{
            cell.style.backgroundColor = "red"
            //let color = "red"
            tempNum[i][j] = 0
            console.log(tempNum)
            checkWinner()
        }
    })  
})

let count1 = 0 , count2 = 0 ,count3 = 0 , count4 =0
function checkWinner(){
    for(let i = 0;i<5;i++){
        if(num[i][0] !== null && num[i][0] === num[i][1] && num[i][1] === num[i][2] && num[i][2] === num[i][3] && num[i][3] === num[i][4] ){
            console.log(i+1)
        }
    }
}


