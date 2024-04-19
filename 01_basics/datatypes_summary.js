//Primitive Datatypes
//7 types:-String, Number, Boolean, null, undefined, Symbol(to make any value unique we use symbol), BigInt(large number)

//JS is Dynamically typed lang as we dont need to define the datatype of a variable by our own(where the interpreter assigns variables a type at runtime based on the variable's value at the time)

const num1=100
const num2=33.3

const isLoggedIn=true
const outsideTemp = null//null
let userEmail;//undefined

const id = Symbol('123');//type - Symbol
const anotherId = Symbol('123');//
console.log(id);//Symbol(123)
console.log(anotherId);Symbol(123)
console.log(id === anotherId);//false

const bigNumber = 75234678784n//represents BigInt Datatype

//Reference datatype / Non-Primitive datatypes
//like- Arrays, Objects, Functions

console.log("Array's example");
const heros =["Iron Man","Spider Man","Black Panther", "Shaktiman"];
console.log(heros);

console.log("Object's example");

let myObj={
    name :"Ananya Kaushal",
    age : 24,
    emailId : "ananyak87684@gmail.com",
};
console.log(myObj);

console.log("Function's example");

const myFuntion=function()
{
    console.log("Hello Ananya");
}

console.log(typeof outsideTemp);//object
console.log(typeof bigNumber);//bigint
console.log(typeof myFuntion);//function (in detail known as function object)
console.log(typeof heros);//object
console.log(typeof userEmail);//undefined


