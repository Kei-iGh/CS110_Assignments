//2. Write a function that takes a number and returns its factorial value. 
//Test your function by calling it and printing its returned value on console.

let number = 12;

function FactorialOfANumber(somenumber){
    let result = 1;

    while(somenumber > 0){

    result *= somenumber; 
    somenumber -= 1;
    

    }
        return console.log(result);
}


FactorialOfANumber(number);

let number2 = 0

function FactorialOfNegativeNumbersAndZero(somenumber2){
let result = "";

if(somenumber2 < 0){
    result2 = "Does Not Exist!!!";
    return console.log(result2);

} else if(somenumber2 === 0) {
    result2 = "1";
    return console.log(result2);
}


}



FactorialOfNegativeNumbersAndZero(number2)