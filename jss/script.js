var numOne=parseInt(prompt("input a number"));
var numTwo=parseInt(prompt("input another number"));
var add=function(numOne, numTwo){
     return numOne + numTwo;
    };
var result=add(numOne, numTwo);
var outPut="their sum is "+ result;
alert(outPut);

var heightMetres=parseInt(prompt("enter your height in meters"));
var weightKg=parseInt(prompt("enter your weight in Kg"));
var bmi=function(heightMetres, weightKg){
    return weightKg / (heightMetres * heightMetres);
};
var resultTwo=bmi(weightKg, heightMetres);
var outPuttwo="your bmi is "+ resultTwo;
alert(outPuttwo);