//1. Write a function that takes a number and returns the sum of its digits. 
//Test your function by calling it and outputting its result on console.

let number = 556443554334343;

function DigitsSum(anynumber) {
    let sum = 0;

    while(anynumber != 0) {
        sum = sum + anynumber % 10;
        anynumber = Math.trunc(anynumber / 10);

    }

        return console.log(sum);
}

DigitsSum(number);