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

