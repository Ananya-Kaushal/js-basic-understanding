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
    console.log("Same Type");
}
else{
    console.log("Not Same Type");//Not Same Type
}

if (2 !== '2') {
    console.log("Not equal");//Not equal
}
