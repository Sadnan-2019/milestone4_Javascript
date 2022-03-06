var friendage = [14, 15, 16, 17];

var NaiYka = ["shabana", "porimoni", "kopila", "popi"];

console.log(friendage.length);
console.log(NaiYka.length);

// arraylenth,array

// class 18.2

// class 18.3

// array indexing & replacing existing value
var bookName = ["kobita", "golpo", "grontho", "natok", "rochona"];

console.log(bookName);
bookName[(0, 1, 2)] = ["shahitto", "goppo", "natika"];
console.log(bookName);

var yearName = [2022, 2023, 2024, 2025, 2026];
console.log(yearName);

// var indexbook=bookName[2]
// console.log(indexbook)
// var IndexYear=yearName[4]
// console.log(IndexYear)

// var bookNameIndex=bookName.indexOf('rochona');
// console.log(bookNameIndex);
// var yearIndex=yearName.indexOf(2025)
// console.log(yearIndex)
yearName[1] = 2055;
console.log(yearName);

// class 18.4

// push & pop shift,unshift,slice,sort bujhta hoibo

var nameofStudent = ["sadnan", "amin", "farhad", "sabbin"];

nameofStudent.push("sabbin");
nameofStudent.pop("sabbin");
nameofStudent.pop("sabbin");
nameofStudent.pop("sabbin");
nameofStudent.pop("sabbin");
nameofStudent.push("sadnan");
nameofStudent.push("farhad");
nameofStudent.push("sabbin");
nameofStudent.push("amin");

nameofStudent.shift("sadnan");
nameofStudent.shift("amin");
nameofStudent.shift("farhad");
nameofStudent.shift("sabbin");
nameofStudent.unshift("sabbin");

console.log(nameofStudent);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, 3);
var fruitessliuce = fruits.slice(1, 3);
console.log(fruitessliuce);

// var fruitssort = ["Banana", "Orange", "Apple", "Mango"];
// var sortfruit=fruits.sort('komola')
// console.log(sortfruit)
var fruitssort = ["Banana", "Orange", "Apple", "Mango"];
fruitssort.unshift("komola");
console.log(fruitssort);

// class 18.5

// > < =>,<=,==,!=

// comparison operator

var comone = 50;
var comtwo = 40;
 
console.log(comone > comtwo);
console.log(comone < comtwo);
console.log(comone >= comtwo);
console.log(comone <= comtwo);
console.log(comone == comtwo);
console.log(comone != comtwo);

// class 18.6

// conditional statement made by logical operator with comparison operator

var boro = 50;
var majhari = 40;
var cuto = 30;

if (boro > majhari && boro < cuto) {
  console.log(boro);
} else if (majhari > cuto || majhari < boro) {
  console.log(majhari);
} else {
  console.log("this no " + cuto);
}

// class 18.7

// multile comparison operatoe use cretaing a condition

var getJob = true;
var hashouse = true;
moneyM = 50000;

if ((getJob == true && moneyM > 1000000) || hashouse == true) {
  console.log("now ready");
} else {
  console.log("not now ready");
}

// class 18.8

//multi stage condition & nested condtion

var num1 = 20;
var num2 = 15;
var num3 = 22;

if (num1 > num2 && num1 > num3) {
  console.log(num1);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}
