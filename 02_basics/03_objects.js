// singleton(using constructor) like:-
//Object.create();
//Object Literals
const mySym1 = Symbol("key1");
const JsUser={
    name :"Ananya",
    "full name":"Ananya Kaushal",
    age:18,
    mySym:"myKey1",
    [mySym1]:"myKey1",
    location:"Lalitpur",
    email:"ananyaK12@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
};

console.log(JsUser.email);//ananyaK12@gmail.com
console.log(JsUser["email"]);//ananyaK12@gmail.com
console.log(JsUser["full name"]);//Ananya Kaushal
console.log(JsUser.mySym);//myKey1
console.log(typeof JsUser.mySym);//string
console.log(JsUser[mySym1]);//myKey1

JsUser.email="AnanyaKaushal12@gmail.com";
//Object.freeze(JsUser);//now data can't be changed at all
JsUser.email="ak12@gmail.com";
console.log(JsUser.email);//AnanyaKaushal12@gmail.com
console.log(JsUser);
/*
{
  name: 'Ananya',
  'full name': 'Ananya Kaushal',
  age: 18,
  mySym: 'myKey1',
  location: 'Lalitpur',
  email: 'AnanyaKaushal12@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/
JsUser.greeting=function () {
    console.log("Hello JS Users");
}

JsUser.greetingTwo=function () {
    console.log(`Hello JS Users, ${this["full name"]}`);
}

console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting());//Hello JS User
//undefined
console.log(JsUser.greetingTwo());/*Hello JS Users, Ananya Kaushal
undefined*/
