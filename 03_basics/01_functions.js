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
