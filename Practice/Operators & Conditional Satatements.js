//This is a Comment
/* This is a multi-line comment
This is a multi-line comment
This is a multi-line comment */


Arithmetic Operators
const a=10;
const b=20;
console.log("a: ", a, "& b: ", b);
console.log("a+b: ", a+b);
console.log("a-b: ", a-b);
console.log("a*b: ", a*b);
console.log("a/b: ", a/b);
console.log("a%b: ", a%b);
console.log("a**b: ", a**b);

Unary Operators
let a=10;
console.log("a: ", a);
console.log("++a: ", ++a);
console.log("--a: ", --a);
console.log("a++: ", a++);
console.log("a--: ", a--);

Assignment Operators
let b=5;
console.log("b: ", b);
b+=4;
console.log("b +=: ", b);
b-=4;
console.log("b -=: ", b);
b*=4;
console.log("b *=: ", b);
b%=4;
console.log("b %=: ", b);
b**=4;
console.log("b **=: ", b);

Comparision Operators
let a=5;
let b="5";
let c=6;
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
console.log(a>=c);
console.log(a<=c);
console.log(a>c);
console.log(a<c);

Logical Operators
console.log(5>3 && 9==9);
console.log(5>3 && 9==8);
console.log(5>3 || 9==0);
console.log(3>3 || 9==9);
console.log(!5>3);
console.log(!3==="6");

Conditional Statements

const mode="light";
let color;
if(mode=="dark"){
    color="black";
}
if(mode=="light"){
    color="white";
}
console.log(color);
ternary operator

alert("Hello World!");
promt("Enter Anything :")
Practice Question 1
let num = prompt("Enter the Number :");
if(num%5==0){
    console.log(num, "is thr multiple of 5.");
}else{
    console.log(num ,"is not the multiple of 5.");
}

Practice Question 2
const marks=prompt("Enter your Marks :");
if(marks>=80 && marks<=100){
    console.log("Grade A");
}
else if(marks>=70 && marks<=89){
    console.log("Grade B");
}
else if(marks>=60 && marks<=69){
    console.log("Grade C");
}
else if(marks>=50 && marks<=59){
    console.log("Grade D");
}
else if(marks>=0 && marks<=49){
    console.log("Grade F");
}