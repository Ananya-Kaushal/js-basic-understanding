//let score=33
let score ="33abc"
let scoreNull = null
let scoreUndefined= undefined
let scoreBool=true
console.log(typeof score);//o/p - string
console.log(typeof(score));//inside method o/p-string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN(not a number)
//hence NaN is special type

let valueInNumberNull =Number(scoreNull);
console.log(typeof valueInNumberNull);//number
console.log(valueInNumberNull);//o/p - 0

let valueInNumberUndefined =Number(scoreUndefined)
console.log(typeof valueInNumberUndefined);//number
console.log(valueInNumberUndefined);//o/p - NaN(not a number)

let valueInNumberBool = Number(scoreBool)
console.log(typeof valueInNumberBool);//number
console.log(valueInNumberBool);//o/p - 1

//"33" => 33
//"33abc" => NaN
//true =>1; false =>0

let isLoggedIn =1 //"" ->false 0
//"Ananya" -> true 1

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof boolIsLoggedIn);//boolean
console.log(boolIsLoggedIn);//true

//1=> true; 0=> false; ""=>false ; "Ananya" => true

let someNumber =33

let stringNumber=String(someNumber)
console.log(typeof stringNumber);//string
console.log(stringNumber);//"33"

// *************** Operations ****************

let value = 3
let negValue =-value
console.log(negValue);

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2/2);//1
console.log(2%2);//0
console.log(2**2);//4 (** => power of)

let str1="Hello"
let str2=" Ananya"

let str3=str1+str2
console.log(str3);//Hello Ananya

console.log("1" + 2);//as string hence 12
console.log(1 + "2");//as string hence 12
console.log("1" + 2+ 2);//as string hence 122
console.log(1 +2 +"2");//as number(1+2=3) then whole as sstring hence final o/p=>32

console.log(+true);//1 (bad approach, clean code should be written)

console.log(+ "");//0 (bad approach ,"" represents false hence 0 is the o/p)

let num1, num2, num3
num1 = num2 =num3 =2+2

console.log([num1,num2,num3]);//[4, 4, 4]
//(bad approach)

let gameCounter=100;
gameCounter++;
console.log(gameCounter);//101
++gameCounter;
console.log(gameCounter);//102

