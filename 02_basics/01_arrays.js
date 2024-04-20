//arrays

const myArr =[0,1,2,3,4,5,true,"Ananya"]
const myHeros=["Iron Man","Bat Man","Spider Man","Shaktiman","SuperMan","Black Panther"] 
const myArr2=new Array(1,2,3,4)
//note:-array has prototype inside protype

console.log(myArr[0]);/*0 shallow copiess are 
present hence the changes are reflected to main array as well as like in heap memory*/
console.log(myHeros[2]);//Spider Man
console.log(myArr2[3]);//2

//Arrays Methods
console.log("Arrays Methos");
myArr.push(6)
myArr.push(7)
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, true, 'Ananya', 6, 7]
myArr.pop();//removes last value from Array
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, true, 'Ananya', 6 ]

myArr.unshift(9)//inserts the element at start or 0th index of array
console.log(myArr);//[ 9, 0, 1, 2, 3, 4, 5, true, 'Ananya', 6 ]

myArr.shift();//removes element from 0th index as 9 iss removed
console.log(myArr);//[ 0, 1, 2, 3, 4, 5, true, 'Ananya', 6 ]

console.log(myArr.includes(9));/*false returnss boolean on the basis of 'xyz' presence in the array*/
console.log(myArr.indexOf(9));//-1 as it is not present
console.log(myArr.indexOf('Ananya'));//7

let newArr = myArr.join();
console.log(newArr);//0,1,2,3,4,5,true,Ananya,6 joined but as in string type

//slice,splice
console.log("slice and splice Method in Array");
console.log("A ",myArr);//A  [ 0, 1, 2, 3, 4, 5, true, 'Ananya', 6 ]

let myn1=myArr.slice(1,3)
console.log(myn1);//[1,2]
console.log("B ",myArr);//B  [ 0, 1, 2, 3, 4, 5, true, 'Ananya', 6 ]

let myn2=myArr.splice(1,3)
console.log(myn2);//[1,2 ,3 ] as it includes last index also into the sliced array and also reflects the changes into the main array
console.log("C ",myArr)//C  [ 0, 4, 5, true, 'Ananya', 6 ]
