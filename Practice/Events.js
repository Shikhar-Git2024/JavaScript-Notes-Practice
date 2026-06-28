let btn1=document.querySelector("#btn1");
btn1.onclick=()=>{
    console.log("HANDLER1");
    console.log(2);
}

btn1.onclick=()=>{
    console.log("HANDLER2");
    console.log(2);
}

let box=document.querySelector("#box");
box.onmouseover=()=>{
    console.log("MOUSE HOVER OVER THE BOX");
}

btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}
btn1.addEventListener("click", (e)=>{
    console.log("HANDLER2");
    console.log(e);
    console.log(e.type);
})


btn1.addEventListener("click", ()=>{
    console.log("HANDLER1");
});

btn1.addEventListener("click", ()=>{
    console.log("HANDLER2");
});

const handler3=()=>{
    console.log("HANDLER3");
}
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", ()=>{
    console.log("HANDLER4");
});


btn1.removeEventListener("click", ()=>{
    console.log("HANDLER3");
});

btn1.removeEventListener("click", handler3);


Practice Qs 1 Toggling Button 
let modeBtn=document.querySelector("#mode");
let currMode="light";
modeBtn.addEventListener("click", ()=>{
    if(currMode=="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

    console.log(currMode)
})

modeBtn.addEventListener("click", ()=>{
    if(currMode=="light"){
        currMode="dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }else{
        currMode="light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }

    console.log(currMode)
});