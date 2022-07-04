//3. Write a function that returns the minimum number in a given array. 
//Test your function by calling it and printing its returned value on console.

let numbers = [1, 454, 5454, -343, 0, -55555555]

function FindMinimumInArray([somenumbers]){
    
    let minimum = somenumbers[0]

    for(let i = 0; i < somenumbers.length; i++) {
        if(somenumbers[i] < minimum) {
            minimum = somenumbers[i];
        }
    }
    return minimum;
}

console.log(`The minimum number in the array [${numbers}] is ${FindMinimumInArray([numbers])}`);

