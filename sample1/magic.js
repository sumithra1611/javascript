let btn = document.getElementById("btn")
let clicks = document.querySelector(".clicks")
let count =0
btn.onclick = magic
    

function magic(){
    count++
    console.log(count)
    clicks.innerHTML = count
    
    switch (count) {
        case 1:
            document.body.style.backgroundColor = "orange"
            break;
        case 2:
            document.body.style.backgroundColor = "pink"
            break;
        case 3:
            document.body.style.backgroundColor = "blue"
            break;
        case 4:
            document.body.style.backgroundColor = "red"
            break;
        case 5:
            document.body.style.backgroundColor = "green"
            break;
        default:
            document.body.style.backgroundColor ="white"
            break;
    }
    
    
}


