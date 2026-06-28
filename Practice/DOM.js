console.log("Hello");
alert("Apna College"); 
console.log(window);
window.alert("Apna College"); 
console.dir(window.document);
console.dir(document);

let ids=document.getElementById("myId");
let classes=document.getElementsByClassName("myClass");
let parah=document.getElementsByTagName("p");
console.dir(ids);
console.dir(classes);
console.log(parah);
console.dir(parah);

let a=document.querySelector("myClass");
let b=document.querySelectorAll("myClass");
console.log(a);
console.dir(a);
console.log(b);
console.dir(b);


let div=document.querySelector("div");
console.dir(div);
console.dir(div.innerText);
console.dir(div.innerHTML);

let h1=document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText=h1.innerText + "from Apna College Students";


let divs=document.querySelectorAll(".box");
divs[0].innerText="Hello";
divs[1].innerText="Fellow";
divs[2].innerText="Dellow";

let div=document.querySelector("div");
console.dir(div);
let val=div.getAttribute("id");
div.setAttribute("id", "newid");
console.dir(val);

let newBtn=document.createElement("button");
newBtn.innerText="Click me";
console.log(newBtn);
let div=document.querySelector("div");
div.append(newBtn);
div.prepend(newBtn);
div.before(newBtn);
div.after(newBtn);
div.remove(newBtn);

Practice Qs 1
let newBtn=document.createElement("button");
newBtn.innerText="Click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";

let div=document.querySelector("div");
div.prepend(newBtn);

Practice Qs 2
let parah=document.querySelector("p");
parah.classList
DOMTokenList ['content', value: 'content']
parah.classList.add("newClass");
undefined
parah.classList
DOMTokenList(2) ['content', 'newClass', value: 'content newClass']
parah.classList
DOMTokenList(2) ['content', 'newClass', value: 'content newClass']
parah.classList.remove("newClass");
undefined
parah.classList
DOMTokenList ['content', value: 'content']
parah.classList
DOMTokenList ['content', value: 'content']
parah.classList.add("newClass");
undefined
parah.classList
DOMTokenList(2) 