const score=400
console.log(score);//400
console.log(typeof(score));//number

const balance = new Number(100);
console.log(balance);//[Number: 100]
console.log(typeof balance);//object
console.log(balance.toFixed(2));//100.00

console.log("Number to String Conversion");
const stringBalance=balance.toString();
console.log(stringBalance);//100
console.log(typeof stringBalance);//string
console.log(stringBalance.length);//3

const otherNumber=26.7658

console.log(otherNumber);//26.7658
console.log(otherNumber.toPrecision(5));//26.766 and returns a string

const hundreds = 1000000
console.log(hundreds.toLocaleString());//1,000,000 by default US Standard Number System
console.log(hundreds.toLocaleString('en-In'));
//10,00,000 as changed to Indian Standard Number System

// ***************  Maths  ******************
console.log("Working on Math Library");
console.log(Math);//Object [Math] {} as it's object wwith many properties in it
console.log(Math.abs(-4));//4 as it returns absolute value
console.log(Math.round(76.4));//76
console.log(Math.round(76.5));//77
console.log(Math.ceil(4.3));//5
console.log(Math.floor(4.6));//4
console.log(Math.min(4, 3, 6, 8));//3
console.log(Math.max(4, 3, 6, 8));//8
console.log(Math.random());//0.8420222075402672 as it gives the value from 0 to 1 (0-1)
console.log((Math.random()*10) + 1);//7.268534618936618 for single digit



