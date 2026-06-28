for loop
for(let i=0; i<5; i++){
    console.log("Apna College")
}
console.log("loop has ended.");

while loop
let i=1;
while(i<=5){
    console.log("i =", i);
    i++;
}

do-while loop
let j=5;
do{
    console.log("j =", j);
    j++;
}while(j<5);

for-of loop
let name="Shikhar";
for(let x of name){
    console.log("x =", x);
}

for-in loop
const student = {
    name: "Kaalu Bhalu Singh",
    age: 20,
    cgpa: 9.5,
    isPass: true
};

for(let key in student){
    console.log("key =", key, "Value =", student[key]);
}


Practice prob 1
for(let num=1; num<=100; num++){
    if(num%2==0){
        console.log(num);
    }
}

Practice Qs 2
let gameNum=25;
let userNum=prompt("Guess the correct number ?");
while(userNum!=gameNum){
    userNum=prompt("Guess the correct number ?");
}
console.log("Congratulations you guessed the correct number!!");

String in JS
let str="Shikhar";
let str1="Singh"
console.log(str.length);
console.log(str[0], str[1], str[2]);

Template Literals
let specialString=`Hello Template Literals ${1+2+3}`;
console.log(specialString);

const obj={
    name:"Shikhar",
    age:21
}
console.log("My name is", obj.name, "and Age is", obj.age);
console.log(`My Nmeae is ${obj.name} and Age is ${obj.age}`);

Escape Characters
console.log("Apna\nCollege");
console.log("Apna\tCollege");

String Methods

Practice Qs1
let username=prompt("Enter the Full Name");
console.log("Your Username is\n@"+username+username.length);