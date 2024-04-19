console.log(2>1);//true
console.log(2>=1);//true
console.log(2<1);//false
console.log(2==1);//false
console.log(2!=1);//true
console.log(2<=1);//false

console.log("2">1);//true as "2" is converted to number 2
console.log("02">1);//true as "02" is converted to number 2

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null != 0);//true
console.log(null < 0);//false
console.log(null >= 0);//true
console.log(null <= 0);//true

/* The reasson is that an equality(==) check and comparision(<,<=,>,>=) works differently
Comparision converts null to a number treating it as 0 that's why (null>=0 and null<=0) gives o/p as true*/
console.log("For Undefined");
console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined != 0);//true
console.log(undefined < 0);//false
console.log(undefined >= 0);//false
console.log(undefined <= 0);//false

// strict check means === (it checks value as well as it's datatype)

console.log("Strict check");
console.log("2" == 2);//true
console.log("2" === 2);//false as "2" is string type where as 2 is number type 
