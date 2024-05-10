//object literals
//const tinderUser = new Object();singleton object
const tinderUser={};//non-singleton object
console.log(tinderUser);//{}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser={
    email:"sum@gmail.com",
    fullname:{
        userfullname:
        {
            firstname:"Ananya",
            lastname:"Kaushal"
        }
    }
}

console.log(regularUser);
/*{
    email: 'sum@gmail.com',
    fullname: { userfullname: { firstname: 'Ananya', lastname: 'Kaushal' } }
  }
*/
console.log(regularUser.fullname);
//{ userfullname: { firstname: 'Ananya', lastname: 'Kaushal' } }
console.log(regularUser.fullname?.userfullname);//{ firstname: 'Ananya', lastname: 'Kaushal' }
//here ,? represents if else for that percular key weather ,it's present or not

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj5={
    5:"a",
    6:"b"
}
const obj3={obj1,obj2};
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4=Object.assign({},obj1,obj2,obj5);
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6={...obj1,...obj2,...obj5};
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }using spread

//Array's objects
const users=[
    {
        id:"1",
        email:"a@gmail.com"
    },
    {
        id:"2",
        email:"b@gmail.com"
    },
    {
        id:"3",
        email:"c@gmail.com"
    },
    {
        id:"4",
        email:"d@gmail.com"
    }
];

users[1].email;
console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ] in the form of arrays
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] got array of arrays
console.log(tinderUser.hasOwnProperty('name'));//true
console.log(tinderUser.hasOwnProperty('isLogged'));//false

//Object de-structuring/////////////////
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor}=course
console.log(courseInstructor);//Hitesh

const {courseInstructor : instructor}=course
console.log(instructor);//Hitesh

// const navbar=({company}) => {
    
// }//concept of dde-structuring
// navbar(company="BPL");

// {
//     "name":"Hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }APIs

/*{"results":[{"gender":"female","name":{"title":"Miss","first":"Bertha","last":"Martinez"},"location":{"street":{"number":6437,"name":"Forest Ln"},"city":"Manchester","state":"Alabama","country":"United States","postcode":31913,"coordinates":{"latitude":"84.8725","longitude":"21.4426"},"timezone":{"offset":"-8:00","description":"Pacific Time (US & Canada)"}},"email":"bertha.martinez@example.com","login":{"uuid":"1822a480-36b2-4da5-854a-f8d7ca868438","username":"purplewolf569","password":"denali","salt":"zTiZPuXw","md5":"f78a22fe5577bb337e26506caeb8cf80","sha1":"bf2769de382aa23e5393a649a28d935156a5a247","sha256":"cdb01a06b37a06718bc70c88a8eee3123936fc77d4cdcb6e26ca3289026c5c9e"},"dob":{"date":"1992-05-24T11:10:35.829Z","age":31},"registered":{"date":"2011-10-16T01:13:18.672Z","age":12},"phone":"(753) 631-5226","cell":"(393) 993-4710","id":{"name":"SSN","value":"533-95-1660"},"picture":{"large":"https://randomuser.me/api/portraits/women/75.jpg","medium":"https://randomuser.me/api/portraits/med/women/75.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/75.jpg"},"nat":"US"}],"info":{"seed":"4091d8a6e1b8aca5","results":1,"page":1,"version":"1.4"}}*/
//   [
//     {},
//     {},
//     {}
//   ]
  //randomuser me apis
  //then use json formatter to extract data
  //JSON- Javascript Object Noatation