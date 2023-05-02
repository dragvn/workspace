// // Description:
// // Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// // Examples
// // remove("Hi!") === ""
// // remove("Hi! Hi!") === ""
// // remove("Hi! Hi! Hi!") === ""
// // remove("Hi Hi! Hi!") === "Hi"
// // remove("Hi! !Hi Hi!") === ""
// // remove("Hi! Hi!! Hi!") === "Hi!!"
// // remove("Hi! !Hi! Hi!") === "!Hi!"

// //params
//     //string of words
// //return 
//     //string of words with others removed
// //ex
//     // remove("Hi Hi! Hi!") === "Hi"
//     // remove("Hi! !Hi Hi!") === ""
//     // remove("Hi! Hi!! Hi!") === "Hi!!"
// //pseudo
//     //split into array ' ' delimiter
//     //sort each string in array 
//         //split
//         //sort


// let str = 'Hi! !!Hi !Hi Hi!! Hi'
// const remove = str => {
//     return str
//         .split(' ')
//         .filter(word => word.split('!').length != 2)
//         .join(' ')
// }
// let word = 'Hi!!'
// console.log(word.split('!'))
// console.log(remove(str))
/****************************************************************************************************************************************** */
// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. 
// The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. 
// When it comes to subtraction, the first number will always be greater than or equal to the second number.



//params 
    //string, dots operator dots, separated by one space
//return
    //string with appropriate number of dots
//example
    //Examples (Input => Output)
    // * "..... + ..............." => "...................."
    // * "..... - ..."             => ".."
    // * "..... - ."               => "...."
    // * "..... * ..."             => "..............."
    // * "..... * .."              => ".........."
    // * "..... // .."             => ".."
    // * "..... // ."              => "....."
    // * ". // .."                 => ""
    // * ".. - .."                 => ""
//pseudo
    //split string using spaces
    //convert index[0] and index[2] to numbers


//solution
    // let str = "..... + ..............."
    // const dotCalculator = str => {
    //     const operations = {
    //         '+' : (a, b) => a + b,
    //         '-' : (a, b) => a - b,
    //         '*' : (a, b) => a * b,
    //         '//': (a, b) => a / b
    //     }
    //     const [left, operator, right] = str.split(' ')
    //     return '.'.repeat(operations[operator](left.length, right.length))
    // }

    // console.log(dotCalculator(str))
/****************************************************************************************************************************************** */
// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

//PARAMS
    //string of words
//RETURN
    //string with words that contain more than one '!' removed
//EXAMPLES
    // remove("Hi Hi! Hi!") === "Hi"
    // remove("Hi! !Hi Hi!") === ""
    // remove("Hi! Hi!! Hi!") === "Hi!!"
//PSEUDO
    //split string based on spaces
    //split each array item based on !
    //filter based on length

//SOLUTION
    // const removeWords = str => {
    //     return str
    //         .split(' ')
    //         .filter(word => word.split('!').length != 2)
    //         .join('')
    // }
    // console.log(removeWords("Hi Hi! Hi!"))
    // console.log(removeWords("Hi! !Hi! Hi!"))
/****************************************************************************************************************************************** */
// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string.
// When it comes to subtraction, the first number will always be greater than or equal to the second number.

//PARAMS
    //strings ex '.....+.......'
//RETURN
    //string of dots equal to solution ex '....'
//EXAMPLES
    // * "..... + ..............." => "...................."
    // * "..... - ..." => ".."
//PSEUDO
    //split 

//solution
    // let str = "..... + ..............."
    // const dotCalculator = str => {
    //     const operations = {
    //         '+' : (a,b)=> a + b,
    //         '-' : (a,b)=> a - b,
    //         '*' : (a,b)=> a * b,
    //         '//' : (a,b)=> a / b
    //     }
    //     const [left, operator, right] = str.split(' ')
    //     return '.'.repeat(operations[operator](left.length, right.length))
    // }
    // console.log(dotCalculator(str))
/****************************************************************************************************************************************** */
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length

//solution

    //const sortedByLength = str => srt.sort((a,b)=> a.length - b.length)
/****************************************************************************************************************************************** */
//dot calc
// Dot Calculator
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator.
// The dots and the operator will be separated by one space.

// Here are the following valid operators :

// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string.
// When it comes to subtraction, the first number will always be greater than or equal to the second number.

//solution
    // const dotCalculator = str => {
    //     const operations = {
    //         '+': (a, b) => a + b,
    //         '-': (a, b) => a - b,
    //         '*': (a, b) => a * b,
    //         '//': (a, b) => a / b,
    //     }
    //     const [left, operator, right] = str.split(' ')
    //     return '.'.repeat(operations[operator](left.length, right.length))
    // }
//been slack
/****************************************************************************************************************************************** */
    // let str1 = '1234'
    // let str2 = 'llama'
    // let arr1 = [1,2,3,4,5]
    // let arr2 = [9,8,7,6]

    // console.log(str1.concat(str2))
    // console.log(arr1.concat(arr2))
/****************************************************************************************************************************************** */
    // class MakeCar{
    //     constructor(carMake, carModel, carColor, numOfDoors){
    //         this.make = carMake
    //         this.model = carModel
    //         this.color = carColor
    //         this._doors = numOfDoors
    //     }
    //     honk(){
    //         alert('bbbeppp')
    //     }
    //     lock(){
    //         alert('locked the fuck up')
    //     }
    // }
/****************************************************************************************************************************************** */
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements.
//FISHER-YATES SHUFFLE
    //walk array in reverse
    //declare random index from 0 to current index
    //swap current index with random index ^^^

    // const fisherYatesShuffle = arr => {
    //     for(i = arr.length - 1; i > 0; i--){ //walk arr in reverse
    //         let j = Math.floor(Math.random() * (i + 1)) //random val 0 to i
    //         [arr[i], arr[j]] = [arr[j], arr[i]] //swap em
    //     }
    // }
/****************************************************************************************************************************************** */
//MakeCar class with 4 props and 2 methodds
    // class MakeCar {
    //     constructor(make, model, color, doors){
    //         this.make = make
    //         this.model = model
    //         this.color = color
    //         this.doors = doors
    //     }
    //     honk(){
    //         alert('bbeep')
    //     }
    //     lock(){
    //         alert(`locked up all ${this.doors} doorz`)
    //     }
    // }

    // let sneezy = new MakeCar('gronda', 'chiviec', 'key limon', 3)
/****************************************************************************************************************************************** */
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

//params
    //array
//return
    //new array (filtered)
//pseud
    //filter arr for vals >= a && <= b

// const filterRange = (arr, a, b) => {
//     return arr.filter((item) => item >= a && item <= b)
// }
/****************************************************************************************************************************************** */
//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b.
    // let arr = [1,2,3,4,5,6,7,8,9]
    // const filterRangeInPlace = (arr, a, b) => {
    //     for(i=0; i<arr.length; i++){
    //         let val = arr[i]
    //         if(val <= a || val >= b){
    //             arr.splice(i, 1)
    //             i--
    //         }
    //     }
    //     return arr
    // }
    // console.log(filterRangeInPlace(arr, 3, 6))
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */