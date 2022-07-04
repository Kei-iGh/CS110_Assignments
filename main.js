//In the main.js file, import utils.js and call its functions. By printing your results in the main.js
//file, test your application.


let matrix = [
    [4, 5],
    [7, 8]
];

let matrix1 = [
   [1, 2],
   [3, 4]
];

let matrix2 = [
   [5, 6],
   [7, 8]
];

let matrix01 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix02 = [
    [3, 5, 7],
    [3, 5, 2],
    [2, 5, 2]
]


let myfunctions = require('./utils');

console.log(myfunctions.MatrixProduct(matrix01, matrix02));
console.log(myfunctions.SumOfMatrices(matrix01, matrix02));
console.log(myfunctions.FindSumOfArray([1, 3, 5, 6]));

function SumOfEachRow(mat){
    let summat = [];

    for(let i = 0; i < mat.length; i++){

        summat[i] = myfunctions.FindSumOfArray(mat[i]);

    }
    return summat;

}
console.log(SumOfEachRow(matrix01));
