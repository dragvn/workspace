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
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */
/****************************************************************************************************************************************** */