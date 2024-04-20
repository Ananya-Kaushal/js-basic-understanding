//Dates

let myDate=new Date();
console.log(myDate.toString());//Sat Apr 20 2024 14:12:16 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Sat Apr 20 2024(prints only date)
console.log(myDate.toISOString());//2024-04-20T14:14:32.823Z
console.log(myDate.toJSON());//2024-04-20T14:15:07.261Z
console.log(myDate.toLocaleDateString());//4/20/2024
console.log(myDate.toLocaleString());//4/20/2024, 2:17:22 PM
console.log(myDate.toLocaleTimeString());//2:17:51 PM

console.log(typeof myDate);//object(date object)

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023(note:- months start from 0 in JS)

let myDate2 = new Date(2023, 0 , 23 , 5 , 3);
console.log(myDate2.toLocaleString());//1/23/2023, 5:03:00 AM

let myDate3 = new Date("2024-01-17");//in string month starts from 1 only but in Array /Number it starts from 0(yy-mm-dd)
console.log(myDate3.toLocaleString());//1/17/2024, 12:00:00 AM

let myDate4 = new Date("01-17-2023");//in (mm-dd-yy)formate
console.log(myDate4.toLocaleString());//1/17/2023, 12:00:00 AM

console.log("Time Stamps");
let myTimeStamp = Date.now();
console.log(myTimeStamp);//1713624112799 in milliseconds
console.log(myCreatedDate.getTime());//1674432000000 in milliseconds for comparisions of date
console.log(Date.now()/1000);//1713624363.063 now in Seconds
console.log(Math.floor(Date.now()/1000));//1713624428 in round off to floor in seconds

let newDate = new Date();
console.log(newDate);//2024-04-20T14:48:54.630Z
console.log(newDate.getMonth());//3 represents April (as starts from 0)
console.log(newDate.getDay());//Saturday(as starts from Monday)

//`${newDate.getDay()} and time is`

console.log(newDate.toLocaleString('default',{weekday: "long"
}));//Saturday

