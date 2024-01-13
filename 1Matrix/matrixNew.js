let input1 = create("input","","enter 1st row")
let input2 = create("input","","enter 2nd row")
let input3 = create("input","","enter 3rd row")
let button = create("button","sumbit")
let div = create("div")

let arr = []
let arr1 =[]


button.onclick = function(){
    arr.push(input1.value,input2.value,input3.value)
    console.log(arr) 
      
    arr.forEach(function(val){
        let row = []
        val.split(",").forEach(function(val1){
            if(+val1%2 == 0){
                row.push("even") 
            }
            else{
                row.push("odd")
            }
        })
        arr1.push(row)
    })
    console.log(arr1)
    arr1.forEach(val => document.write(val +"<br>"))
//     for(let i in arr){
//         for(let j in arr){
//             console.log(arr)
//             if(arr[i][j]%2 == 0)
//                 arr1[i][j] = "even"
//             else
//                 arr1[i][j] = "odd"
//             console.log(arr1)
//     }
// } 

}
