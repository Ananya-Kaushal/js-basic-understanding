let a=300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(a);//300

for (let i = 0; i < 5; i++) {
    console.log(i);//0 1 2 3 4
}

//console.log(b);// as scope is not defined
console.log(c);//30

function one() {
    const username="Ananya";
    function two() {
        const website="Youtube";
        console.log(username);
    }
    //console.log(website);//error (website is not defined)
    two();//if two() commented out the nothing is printed
}

one();//Ananya

if(true)
{
    const username="Ananya"
    if (username=="Ananya") {
        const website=" Youtube"
        console.log(username+website);//Ananya Youtube
    }
    //console.log(website);//error(website is not defined)
}

//console.log(username);//error(username is not defined)

// **************** Interesting *****************

console.log(addOne(5));//6
function addOne(num) {
    return num+1;
}


//console.log(addTwo(5));//Error(Cannot access 'addTwo' before initialization)
const addTwo = function (num) {
    return num+2;
}//here, addTwo is expression or variable storing function
console.log(addTwo(5));//7
//Concept of Hoisting (execution centext as of vaariable initialization)