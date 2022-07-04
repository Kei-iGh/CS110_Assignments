//1. In utils.js write a function matrixProduct(mat1, mat2) that returns a new matrix that is
//the product of mat1 and mat2 matrices. Here’s its algorithm:
//mat1: a1 a2   mat2: b1 b2   Result: (a1*b1 + a2*b3) (a1*b2 + a2*b4)
//      a3 a4         b3 b4           (a3*b1 + a4*b3) (a3*b2 + a4*b4)


//2. In utils.js write a function sumOfMatrices(mat1, mat2) that accepts two matrices and
//returns the sum of those matrices in a new matrix. Here’s its algorithm:
//mat1: a1 a2   mat2: b1 b2   Result: (a1+b1) (a2+b2)
//      a3 a4         b3 b4           (a3+b3) (a4+b4)


//3. In utils.js write a function sumOfEachRow(mat) that accepts a matrix and returns an
//array that contains sum of every row of the matrix for its elements.

module.exports = {
MatrixProduct(mat1, mat2){
    let mat3 = [];
    for(let i3 = 0; i3 < mat1.length; i3++)
    mat3[i3] = [];

    for(let i = 0; i < mat1.length; i++){
        for(let j = 0; j < mat1.length; j++){
            let sum = 0;

            for(let innerindex = 0; innerindex < mat1.length; innerindex++){

                sum += mat1[i][innerindex] * mat2[innerindex][j];
            }
            mat3[i][j] = sum
        }
    }
return mat3;
},


SumOfMatrices(mat1, mat2){
    let sum = [];
    for(let sumi = 0; sumi < mat1.length; sumi++){
        sum[sumi] = [];
    }

    for(let i = 0; i < mat1.length; i++){
        for(let j = 0; j < mat1.length; j++){

            sum[i][j] = mat1[i][j] + mat2[i][j]
        }
    }    
    return sum;
},



FindSumOfArray(array){

    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum = sum + array[i];

    }
return sum;
}
}
