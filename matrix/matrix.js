/**
 * @param {number} input1
 * @param {number} arr1
 */

let input1 = create("input","","enter 1st ")
let input2 = create("input","","enter 2nd ")
let input3 = create("input","","enter 3rd")
let button = create("button","sumbit")
let button1 = create("button","show odd/even")
let div = create("div")
div.id = "div"
let p1 = create("p","","",document.getElementById("div"))
let p2 = create("p","","",document.getElementById("div"))
let p3 = create("p","","",document.getElementById("div"))

let arr =[]
let arr1 = []
let arr2 = []
let arr3 = []
let counter =0 

//console.log(arr1)
button.onclick = function() {
    counter++
    if(counter==1){
        arr1.push(input1.value,input2.value,input3.value)
        console.log(arr1)
        
        

    }
    if(counter==2){
        arr2.push(input1.value,input2.value,input3.value)
        console.log(arr2)
        
    
    }
    if(counter==3){
        arr3.push(input1.value,input2.value,input3.value)
        console.log(arr3)
        
    
} 
button1.onclick = function(){
    let result1 = arr1.map((val)=>{
        if(val%2 == 0)
            return "even"
        else
         return "odd"
    })
    p1.textContent = result1

    let result2 = arr2.map((val)=>{
        if(val%2 == 0)
            return "even"
        else
           return "odd"
    })
    p2.textContent = result2

    let result3 = arr3.map((val)=>{
        if(val%2 == 0)
            return "even"
        else
           return "odd"
    })
    p3.textContent = result3
    }    
}

