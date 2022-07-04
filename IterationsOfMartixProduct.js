/* Showcase of each step that is done during the iteration process 

let matrix1 = [
    [1, 2],
    [3, 4]
];

let matrix2 = [
    [5, 6],
    [7, 8]
];

1) i = 0 j = 0 innerindex = 0
mat1[0][0] * mat2[0][0] = 1 * 5

2) i = 0 j = 0 innerindex = 1
mat1[0][1] * mat2[1][0] = 2 * 7

as innerindex < mat1.length (< 2), j starts to iterate

3) i = 0 j = 1 innerindex = 0
mat1[0][0] * mat2[0][1] = 1 * 6

4) i = 0 j = 1 innerindex = 1
mat1[0][1] * mat2[1][1] = 2 * 8

as j is < 2, i starts to iterate

5) i = 1 j = 0 innerindex = 0
mat1[1][0] * mat2[0][0] = 3 * 5

6) i = 1 j = 0 innerindex = 1
mat1[1][1] * mat2[1][0] = 4 * 8

7) i = 1 j = 1 innerindex = 0
mat1[1][0] * mat2[0][1] = 3 * 6

8) i = 1 j = 1 innerindex = 1
mat1[1][1] * mat2[1][1] = 4 * 8
*/
