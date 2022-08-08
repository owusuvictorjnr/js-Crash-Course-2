// let num1 = 10;
// let num2 = 20;
// let num3 = "10";

// let word1 = "Hello";
// let word2 = "hello";

// console.log(num1 < num2);
// console.log(num1 > num2);
// console.log(num1 <= num2);
// console.log(num1 >= num2);
// console.log(!true);
// console.log(!false);
// console.log(num1 == num3);
// console.log(num1 === num3);
// console.log(word1 === word2);
// console.log(word1 !== word2);





// Controle Flow
// let item =  "Gino";//"Annapurna";
// // let item2 = "A1";


// if (item === "Annapurna"){
//     console.log("Buy Annapurna");
// }
// else if (item === "A1") {
//     console.log("Buy A1");
// }
// else{
//     console.log("Buy Rocky Salt")
// }



// Grading System
// let score = 49.5;

// if (score >= 90 && score <= 100){
//     console.log("Excellent")
// } else if(score >= 80 && score <= 89){
//     console.log("Very Good")
// } else if (score >= 70 && score <= 79){
//     console.log("Good")
// } else if(score >= 60 && score <= 69){
//     console.log("Average")
// } else if(score >= 50 && score <= 59){
//     console.log("Credit")
// } else if(score >= 40 && score <= 49){
//     console.log("Pass")
// } else if(score >= 30 && score < 40){
//     console.log("Fail")
// } else{
//     console.log("N/A")
// }



// Functions
// function sum(x, y) {
//     let total  = x + y;
//     return total;
// }
// let twenty = sum(10, 10);
// console.log(twenty)

// let fifteen = sum(7, 8);
// let nineteen = sum(9, 10);

// function multiplacation(a, b=0) {
//     let total  = a * b;
//     return total;
// }
// let Fn = multiplacation(10);
// console.log(Fn)

// let Sn = multiplacation(7, 8);
// let Thirdn = multiplacation(9, 10);


// Loops
// for loop
// let i = 1
// for (i = 1; i <= 5; i++) {
//     console.log(i*5)   
// }


// while loop
// let num = 1;
// while (num <= 10) {
//     console.log(num)

//     num++
// }



// do... while
// let age = 19;
// do{
//     console.log("You can't vote")
//     age++
// }while (age >= 30);



// Array

let ages = [19, 26, 24, 18, 22, 32, 45, 2, 13, 84,11, 19];


// for(let age of ages){
//     // console.log(age); when using `in`
//     console.log(age**2)
// }

// filter
// let marriage = ages.filter((num)=>num > 25);
// console.log(marriage);

// map
// let squares = ages.map((age)=> age)
// console.log(squares)


// find
let eighteen = ages.find((age) => age === 12);
console.log(eighteen)