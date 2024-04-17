const accountId=14553 //to lock the value intentionally
let accountEmail="ananyak66472gmail.com"
/*determine the scope also .Hence let is used basically
Prefer not to use var
bacause of issue in block scope and functional scope*/
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
//accountId = 2
accountEmail="ak@AK.com"
accountPassword=9876
accountCity="Sultanpur"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountId);
console.log(accountState);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);