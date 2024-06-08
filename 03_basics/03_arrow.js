const user={
    username:"Ananya",
    price:999,
    welcomeMessage:function() {
        console.log(`${this.username} ,welcome to website.`);
        console.log(this);
    }
}//this keyword refers to current context

user.welcomeMessage();//Ananya ,welcome to website.
/*{
  username: 'Ananya',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/
user.username="Sam";
user.welcomeMessage();//Sam ,welcome to website.
/*{
  username: 'Sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

console.log(this);//{} current context is empty object inside node environment
/*Inside browser globally 'Window object' is present but on node empty object is present*/

function chai() {
    let username="Ananya"
    console.log(this);
    console.log(this.username);//undefined
}
chai();/*<ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Getter/Setter],
    btoa: [Getter/Setter],
    performance: [Getter/Setter],
    fetch: [Function: value],
    crypto: [Getter]
  }
  undefined
  */

// ************ Arrow Function *****************
const chai2= () => {
    let username="Ananya"
    console.log(this.username);
    console.log(this);
}
chai2()/*undefined
{}
*/

// const addTwo=(num1,num2) => {
//     return num1+num2
// }
//console.log(addTwo(2,3));//5

//******* Implicit return *****
const addTwo=(num1,num2) =>num1+num2
console.log(addTwo(2,3));//5

const addTwoNum=(num1,num2) =>(num1+num2)
console.log(addTwoNum(3,4));//7

const obj2=() => ({username:"Ananya"})
console.log(obj2());//{ username: 'Ananya' }

const myArray=[2,5,3,7,8];
//myArray.forEach(function() {})
//myArray.forEach(() => {return c})
//myArray.forEach(() => ())

