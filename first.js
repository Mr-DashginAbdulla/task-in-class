/* User gives 2 numbers (A and B). Print to the console the result 
of dividing A by B and the remainder of the division.
*/
// let A = prompt("Please enter the value for A");
// let B = prompt("Please enter the value for B");
// console.log(A / B);
// console.log(A % B);



/* The user enters 2 values (A and B). Swap the contents of variables A and B 
(that means the value of variable B must be assigned to variable A, and vice versa).
*/
// let A1 = prompt("Please enter the value for A1");
// let B1 = prompt("Please enter the value for B1");
// A1=B1
// console.log(A1)



/* The user enters 3 non-zero numbers (A, B and C). Print to the console 
the solution (the value of X) of the standard linear equation, where A*X+B=C. 
*/
// let A2 = prompt( "Please enter the value for A2");
// let B2 = prompt("Please enter the value for B2");
// let C2 = prompt("Please enter the value for C2");
// // A2*X + B2 = C2;
// X= (C2-B2)/A2;
// console.log(X)


/*User gives 2 numbers (A and B). If A>B then print to the console the result 
of A+B, if A=B then the result of A*B, if A<B then A-B.
*/
let A3 = prompt('Please enter the value for A3');
let B3 = prompt('Please enter the value for B3');

let x ;
if (A3>B3){
    x = A3 + B3;
}   else if (A3=B3){
    x = A3 * B3;
}   else if (A3<B3){
    x = A3 - B3;
}
console.log(x)
