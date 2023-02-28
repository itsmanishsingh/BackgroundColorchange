let colorchange = document.getElementById("button");

function randomcolor(){
    let array = "0123456789ABCDEF";
    let cons = "#";
    for(let i =0 ;i<6;i++){
        cons = cons + array[Math.floor(Math.random()*16)];
    }

    return cons;
}

function changebackgroundcolor(){
    document.getElementById("canvas").style.backgroundColor = randomcolor();
}

colorchange.addEventListener("click",changebackgroundcolor)
