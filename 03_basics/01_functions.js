function sayMyName() {
  console.log("A");
  console.log("N");
  console.log("A");
  console.log("N");
  console.log("Y");
  console.log("A");
}

sayMyName();
/*A
N
A
N
Y
A*/

function addTwoNumbers(num1,num2) {//parameter
    console.log(num1+num2);
}
const result=addTwoNumbers(4,5);//9
addTwoNumbers(4,"a");//4a
addTwoNumbers(4,null);//4 here arguments
console.log("Result",result);//Result undefined

function addTwoNumbers1(num1,num2) {//parameter
    // let result=num1+num2;
    console.log("Ananya");
    // return result;
    return num1+num2
    console.log("Kaushal");//Unreachable code detected
}

const res=addTwoNumbers1(5,6)
console.log(res);/*Ananya
11*/

function loginUserMessage(username="sam") {
    //here default value of username is sam
    //hence never goes into if block
    if(username === undefined)//!username
        {
            console.log("Please enter a User Name.");
            return;
        }
    return `${username} just logged in`
}
console.log(loginUserMessage("Ananya"));
//Ananya just logged in
console.log(loginUserMessage());
//Please enter a User Name.
//undefined
//undefined just logged in (when if block is not present)

//rest operator
function calculateCartPrice(...num1) {
    return num1;//known as rest/spread operator(...num1)
}
console.log(calculateCartPrice(2,4,6));//[ 2, 4, 6 ]

function calculateCartPrice2(val1,val2,...num1) {
    return num1;//known as rest/spread operator(...num1)
}
console.log(calculateCartPrice2(2,4,6,8));//[ 6, 8 ]

const user={
    username:"Ananya",
    price:199
}
function handleObject(anyobject) {
    console.log(`User Name is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);//User Name is Ananya and price is 199
handleObject({
    username:"sam",
    price:259
})//User Name is sam and price is 259

const myNewArray=[200,400,600,800];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));//400
console.log(returnSecondValue([100,300,500]));
//300