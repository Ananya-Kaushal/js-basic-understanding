// If
const isUserLoggedIn=true;

// if (true) {
//    //all will be executed 
// }

// if (false) {
//     //not be executed
// }

if (isUserLoggedIn) {
    console.log("User is Logged In");
    //User is Logged In
}

//<, >, <=, >=, ==, !=, ===, !==(checks the type as well as)

if (2 == '2') {
    console.log("Executed");//Executed
}

if (2 === '2') {
    console.log("Same Type");//strict equal
}
else{
    console.log("Not Same Type");//Not Same Type
}

if (2 !== '2') {
    console.log("Not equal");//Not equal
}

const temperature=41;
if(temperature===41)
{
    console.log("Temperature is less then 50");
}
else 
{
    console.log("Temarature is greater then 50");
}

const score=200;
if(score>100)
{
    let power='fly'//const is scoped with in the brecket only but var can be used outside as well
    console.log(`User Power: ${power}`)
}
console.log(`User Power: ${power}`)//o/p:- powe is not defined

const balance=1000
//if(balance>500)console.log("test 1"),console.log("test 2"); //bad Practice

if(balance<500)
{
    console.log("less than 500")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900)
{
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=true
const loggedInFromEmail=true

if(userLoggedIn && debitCard)
{
    console.log("Allow to buy Courses")
}//o/p:- Allow to buy Courses

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Februry")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("Octuber")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;
    default:
        console.log("Default Case")
        break;
}//o/p:-March

//If break is skipped or commented in any of the cases then the another continues case will be eecuted automatically, untill it finds next break statement.


