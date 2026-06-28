Function in JS --->
function myfunction(){
    console.log("Welcome to Bwowser");
    console.log("I am learning the JS ^_^");
}

myfunction();
myfunction();

function print(msg){  //parameter
    console.log(msg);
}
print("Shikhar"); //argument

function mul(x, y){
    let s=x*y;
    console.log("before return");
    return s;
    console.log("after return");
}

let val=mul(9, 5);
console.log(val);

Arrow function
const sum=(x, y)=>{
    return x+y;
}

console.log(sum);
console.log(sum(3,7));

Practice Qs 1
function printVowels(str){
    let c=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            c++;
        }
    }
    return c;
}

console.log(printVowels("aeiou"));
console.log(printVowels("my name is shikhar singh."));

Practice Qs 2
let val=(str)=>{
    let c=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            c++;
        }
    }
    return c;
};
console.log(printVowels("aeiou"));
console.log(printVowels("rahul"));

Practice Qs 3
let arr=[1, 2, 3, 4, 5, 6];
arr.forEach((element, idx) => {
    console.log(element**2, idx);
});

arr.map((val)=>{
    console.log(val);
})

let newArr=arr.map((val)=>{
    return val*2;
})
console.log(newArr);

let newArr1=arr.filter((val)=>{
    return val%2===0;
})
console.log(newArr1);

const ans=arr.reduce((res, curr)=>{
    return res+curr;
})
console.log(ans);

let arr1=[2,6,3,7,9,2,6,4,8];
const largest=arr1.reduce((prev, curr)=>{
    return prev>curr ? prev : curr;
})
console.log(largest);


Practice Qs 1
let marks=[23, 67, 98, 78, 99, 56, 92, 95, 87, 56, 20, 100];
let marks90 =marks.filter((val)=>{
    return val>=90 && val<=100;
});
console.log(marks90);

Practice Qs 2
let n=prompt("Enter the number :-");
let arr=[];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log(arr);
const sum=arr.reduce((res, curr)=>{
    return res+curr;
})
console.log(sum);
const prod=arr.reduce((res, curr)=>{
    return res*curr;
})
console.log(prod);