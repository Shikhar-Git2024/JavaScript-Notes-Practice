let marks=[93, 76, 89, 34, 78, 12];
console.log(marks);
console.log(marks.length);

let heros=["spiderman", "superman", "thor", "hulk", "antman"];
console.log(heros);

for(let i=0; i<heros.length; i++){
    console.log(heros[i]);
}

for(let el of heros){
    console.log(el);
}

Practice Qs 1
let sum=0;
for(let i=0; i<marks.length; i++){
    sum+=marks[i];
}
console.log(`The Average is ${sum/marks.length}`);

Practice Qs 2
let prices=[250, 456, 670, 230, 150, 100];
for(let i=0; i<prices.length; i++){
    prices[i]=prices[i]-prices[i]/10;
}
console.log(prices);


prices.push(560);
prices.push(590, 200, 490);
console.log(prices);
let delpri=prices.pop();
console.log(prices);
console.log(delpri);

console.log(prices);
console.log(prices.toString());
console.log(prices);

let p1=[1, 2, 3];
let p2=[4, 5];
let p=p1.concat(p2);
console.log(p);
p.unshift(0);
console.log(p);
let val=p.shift();
console.log(val);
console.log(p);

console.log(p.slice(1, 3));
console.log(p.slice(1, ));
console.log(p.splice(1, 2, ));
console.log(p);
console.log(p.splice(1, 2, 101, 102));
console.log(p);
console.log(p.splice(2, 0, 3));
console.log(p);
console.log(p.splice(3,1));
console.log(p.splice(1, 2, ));

Practice Qs 1
const companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let company=companies.shift();
companies.splice(2, 1, "Ola");
companies.push("Amazon");