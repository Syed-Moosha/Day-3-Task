//Task1
//**************************************************************************************************************
// 1)How to compare two JSON have the same properties without order?
// a. let obj1 = {name:"Persaon 1", age:5};
// a. let obj1 = {age:5, name:"Persaon 1"};

/*
let obj1 = {name:"person 1",age:5};
let obj2 = {age:5,name:"person 1"};

//convert the objects to string and sort

let str1 = JSON.stringify(obj1,Object.keys(obj1).sort()) 
console.log(str1);
let str2 = JSON.stringify(obj2,Object.keys(obj2).sort()) 
console.log(str2);

//Compare the key values using for loops

for(var key in str1,str2) {
    if(str1===str2){
        console.log("The JSON objects are equal");
        break;
    }
    else{
        console.log("The JSON objects are not equal");
        break;
    }
    
}
*/

//compare two JSON using sort method

/*
let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};

//convert the objects to string and sort

let str1 = JSON.stringify(obj1,Object.keys(obj1).sort()) 
console.log(str1);
let str2 = JSON.stringify(obj2,Object.keys(obj2).sort()) 
console.log(str2);

//Compare the strings directly

if(str1===str2){
    console.log("The JSON objects are equal");
}
else{
    console.log("The JSON objects are not equal");
}
*/



//Task2
//************************************************************************************************************************
//2) Use the rest countries' API URL->https//restcountries.com/v3.1all and display all the country flags in the console

/*
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++)
    {
    console.log("flag: ",result[i].flags.png);
    }
}

*/

//Task3
//*******************************************************************************************************************
//3)Use the same rest countries and print all countries name, regions, sub-region and populations

/*

var request1=new XMLHttpRequest();
request1.open('GET','https://restcountries.com/v3.1/all');
request1.send();
request1.onload=function(){
    var data1=request1.response;
    var result1=JSON.parse(data1);
    for(var i=0;i<result1.length;i++)
    {
    console.log("country: ",result1[i].name.common, ", Region: ", result1[i].region,", Subregion: ",result1[i].subregion,"& populations",result1[i].population);
    }
}

*/
