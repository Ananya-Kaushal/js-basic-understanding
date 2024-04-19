const name="Ananya"
const repoCount= 50

console.log(name + repoCount + " Value");//Ananya50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is Ananya and my repo count is 50
//This way of writting string is called string interpolation

const gameName = new String("Ananya-AK")
/*this is String Object defined using new keyword that is represented in key:value pair as:- 
0->"A"
1->"n"
2->"a"
3->"n"
4->"y"
5->"a"
6->"A"
7->"K"
*/

console.log(gameName[0]);//A
console.log(gameName.__proto__);//{} represents object
console.log(gameName.length);//9
console.log(gameName.toUpperCase());//ANANYAAK
console.log(gameName.charAt(5));//a
console.log(gameName.indexOf("K"));//8

const newStr=gameName.substring(0,4);
console.log(newStr);//Anan

const anotherStr = gameName.slice(-9,6);
console.log(anotherStr);//Ananya as reversed the value

const newStr1= "   Ananya Kaushal  ";
console.log(newStr1);//   Ananya Kaushal  
console.log(newStr1.trim());//Ananya Kaushal

const url="https://ananya.com/ananya%20kaushal";
console.log(url.replace('%20','-'));//https://ananya.com/ananya-kaushal
console.log(url.includes('hitesh'));//false

console.log(gameName.split('-'));//['Ananya' , 'AK'] Array of string



