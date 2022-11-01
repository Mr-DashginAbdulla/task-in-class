/* 1. User gives 2 numbers (A and B). Print to the console the result 
of dividing A by B and the remainder of the division.
*/
// let A = parseInt(prompt("Please enter the value for A"));
// let B = parseInt(prompt("Please enter the value for B"));
// console.log(A / B);
// console.log(A % B);


/* 2. The user enters 2 values (A and B). Swap the contents of variables A and B 
(that means the value of variable B must be assigned to variable A, and vice versa).
*/
// let A1 = parseInt(prompt("Please enter the value for A1"));
// let B1 = parseInt(prompt("Please enter the value for B1"));
// A1=B1
// console.log(A1)



/* 3. The user enters 3 non-zero numbers (A, B and C). Print to the console 
the solution (the value of X) of the standard linear equation, where A*X+B=C. 
*/
// let A2 = parseInt(prompt( "Please enter the value for A2"));
// let B2 = parseInt(prompt("Please enter the value for B2"));
// let C2 = parseInt(prompt("Please enter the value for C2"));
// // A2*X + B2 = C2;
// X= (C2-B2)/A2;
// console.log(X)


/* 4. User gives 2 numbers (A and B). If A>B then print to the console the result 
of A+B, if A=B then the result of A*B, if A<B then A-B.
*/
// let A3 = parseInt(+prompt('Please enter the value for A3'));
// let B3 =parseInt(+prompt('Please enter the value for B3'));
// let x ;
// if (A3>B3){
//     x = A3 + B3;
// }   else if (A3==B3){
//     x = A3*B3;
// }   else {
//     x = A3-B3;
// }
// console.log(x)


/* 5. User gives 3 numbers (a, b, c). Find out and print to the console 
the solution of quadratic equation ax^2+bx+c=0.
*/
// let A4 = Number(+prompt( "Please enter the value for A4"));
// let B4 = Number(+prompt("Please enter the value for B4"));
// let C4 = Number(+prompt("Please enter the value for C4"));

// //  A4 * x^2 + B4*x + C4 == 0
// let x1;
// let x2;
// let D = ((B4*B4) - (4*A4*C4));
// console.log(D);

// if (D<0){
//     console.log("NaN false value");
// }   
//     else if(D==0){
//     x1=(-B4)/(2*A4);
//     x2=x1;
//     console.log(x1,x2);
// }   
//     else {
//     x1= ((-B4 + Math.sqrt(D)) / (2 * A4));
//     x2= ((-B4 - Math.sqrt(D)) / (2 * A4));
//     console.log(x1,x2)
// }


/* 6. The user enters a two-digit number. Print the literal representation of this 
number to the console. For example, 
typing "25" will display "twenty five" in the console, 
and "13" will display "thirteen".
*/
// let num = +prompt('Please enter a number for convert to string');
// let secondNum= num%10;
// let tenth = num-secondNum;

// if(num<20){
//    switch (num) {
//     case 10: console.log('ten')
//         break;
//     case 11: console.log('eleven')
//         break;
//     case 12: console.log('twelve')
//         break;
//     case 13: console.log('thirteen')
//         break;
//     case 14: console.log('fourteen')
//         break;
//     case 15: console.log('fifteen')
//         break;     
//     case 16: console.log('sixteen')
//         break;
//     case 17: console.log('seventeen')
//         break;  
//     case 18: console.log('eighteen')
//         break;
//     case 19: console.log('nineteen')
//         break;        
//    }

// } else{

//     switch(tenth){
//         case 20:tenth='twenty'
//         break;
//         case 30:tenth='thirty'
//         break;
//         case 40:tenth='fourty'
//         break;
//         case 50:tenth='fifty'
//         break;
//         case 60:tenth='sixty'
//         break;
//         case 70:tenth='seventy'
//         break;
//         case 80:tenth='eightty'
//         break;
//         case 90:tenth='ninety'
//         break;
//     }

//     switch(secondNum){
//         case 0: secondNum=''
//         break;
//         case 1: secondNum='one'
//         break;
//         case 2: secondNum='two'
//         break;
//         case 3: secondNum='three'
//         break;
//         case 4: secondNum='four'
//         break;
//         case 5: secondNum='five'
//         break;
//         case 6: secondNum='six'
//         break;
//         case 7: secondNum='seven'
//         break;
//         case 8: secondNum='eight'
//         break;
//         case 9: secondNum='nine'
//         break;
//     }
//     console.log(tenth + ' ' + secondNum);
// }


/* 7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle 
with radius r? (the center of the circle is at the origin)
*/