/*
1. Find the minimum element of this array
2. Find the maximum element of this array
3. Find the index of the minimum element of this array
4. Find the index of the maximum element of this array
5. Calculate the sum of array's elements with odd indices
6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
7. Count the number of odd elements in the array
8. Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
*/

let array=[ 3, 78, 34, 98, 31, 6, 562, 75, 0, 86, 69, 25, 46, 1, 257, 9];

//1.
// let minimum=array[0]
// for (const item of array) {
//     if(minimum>item){
//         minimum=item;
//     }
// }
// console.log(minimum);


//2.
// let maximum=array[0]
// for (const item of array) {
//     if(maximum<item){
//         maximum=item;
//     }
// }
// console.log(maximum);


//3.
// let index=0;
// let minimum=array[0];
// for (let i = 0; i < array.length; i++) {
//     if(minimum>array[i]){
//         minimum=array[i];
//         index = i;
//     }
// } 
// console.log(index);


//4.
// let index=0;
// let maximum=array[0];
// for (let i = 0; i < array.length; i++) {
//     if(maximum<array[i]){
//         maximum=array[i];
//         index=i
//     }
// }
// console.log(index);


//5.
// let sum=0;
// for (let index = 1; index < array.length; index+=2) {
//     sum= sum+array[index];
// }
// console.log(sum);


//6.



//7.
let index=0;
for (let i = 0; i < array.length; i++) {
    index=array[i]
    if(index%2>0){
        console.log(index);
    }
}