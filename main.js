/******************************************************************
DECLARATION OF REUSABLE VARS
*******************************************************************/
let arrOfObj = [{name: 'Bob', age: 21}, {name: 'Terry', age: 32}, {name: 'Skrimy', age: '321'}]
let unorderedArrOfNums = [1,3,2,4,6,5,7,9,8]
let nonconsecutiveArr = [67,68,69,70,71,72,73,75,76,77]
let consecutiveArr = [1,2,3,4,5,6,7,8,9,10]
let acscendingArr = [1,3,6,8,11,14,23,32,33,35,41,47]
let nonAscendingArr = [34,445,33,76,1,865,2,43,56,44,77]

/***********************
SORT ARRAY IN ASCENDING ORDER NUMERICALLY 
**********************/

    // function sortArrayAscending(array){
    //     let sortedArray = array.sort((a,b)=> a-b)
    //     console.log(sortedArray)
    // }
    // sortArrayAscending([34,12,90])

    // function sortInAcscending(array){
    //     return array.sort((a,b)=> a-b)
    // }

/***************************************************** */
// Musketeers
// Write a program that:
    
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.
    // let musketeers = ['Athos', 'Porthos', 'Aramis']
    // for(i=0;i<=musketeers.length-1;i++){
    //     console.log(musketeers[i])
    // }
    // musketeers.push("D'Artagnan")
    // musketeers.forEach(musketeer => console.log(musketeer))
    // musketeers.splice(2,1)
    // for(const musketeer of musketeers){
    //     console.log(musketeer)
    // }

/********************************************************* */
// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];

    // let values = [3, 11, 7, 2, 9, 10]
    // let sum = 0
    // values.forEach(value => sum += value)
    // console.log(sum)

/********************************************************* */
// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// const values = [3, 11, 7, 2, 9, 10];

    // let values = [3, 11, 7, 2, 9, 10]
    // let sortedValues = values.sort((a,b)=> a-b)
    // console.log('The arrays maximum values is ' + sortedValues[sortedValues.length-1])

/********************************************************* */
// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

    // let userInput = ''
    // let arrayFromUserInput = []
    // let index = 0

    // while(userInput != 'stop'){
    //     userInput = prompt('Please enter a word, type "stop" to end the program')
    //     arrayFromUserInput[index] = userInput
    //     index++
    // }
    // arrayFromUserInput.pop()
    // console.log(arrayFromUserInput)

/********************************************************* */
// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. 
// Its initial value is 0. Experience must appear in character description.

// // TODO: create the character object here
    // const aurora = {
    //     name: 'Aurora',
    //     health: 150,
    //     strength: 25,
    //     xp: 0,

    //     describe(){
    //         return `${this.name} has ${this.health} health points, ${this.strength} strength and ${this.xp} xp`
    //     }
    // }
    // // // Aurora is harmed by an arrow
    // aurora.health -= 20;

    // // // Aurora equips a strength necklace
    // aurora.strength += 10;

    // // // Aurora learn a new skill
    // aurora.xp += 15;
    // console.log(aurora.describe())

/************************************************************ */
// Modeling a dog
// Complete the following program to add the dog object definition.

// // TODO: create the dog object here
    // const dog = {
    //     name: 'Fang',
    //     species: 'boarhound',
    //     size: 75,
        
    //     bark(){
    //         return 'GRRRR GRRR'
    //     }
    // }
    // console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    // console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

/************************************************************** */
// Modeling a circle
// Complete the following program to add the circle object definition. Its radius value is input by the user.

// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here
//     const circle ={
//         radius: r,

//         circumference(){
//             return circle.radius * 2 * Math.PI
//         },
//         area(){
//             return circle.radius**2 * Math.PI
//         }
//     }
// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

/************************************************************** */
// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

    // const account = {
    //     name: 'Alex',
    //     balance: 0,
        
    //     credit(num){
    //         return account.balance += num
    //     },
    //     describe(){
    //         return `This account belongs to ${account.name}, it has a balance of $${account.balance}`
    //     }
    // }
    // console.log(account.describe())
    // account.credit(250)
    // account.credit(-80)
    // console.log(account.describe())

/************************************************************** *
ARRAY METHODS
*****************************************************************/
//CAMEL CASE / CAMELIZE
// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

    // function camelize(str){
    //     return str
    //         .split('-')
    //         .map((word,index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1))
    //         .join('')
    // }

    // console.log(camelize('background-color'))
    // console.log(camelize('list-style-image'))

/********************************************************** */
// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

    // function filterRange(arr, a, b){
    // return arr.filter(element => (element >= a && element <= b))
    // }

    // console.log(filterRange([5,3,8,1], 1, 4))

/********************************************************** */
// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

    // function filterRangeInPlace(arr, a, b){
    //     for(i=0;i<arr.length;i++){
    //         let val = arr[i]

    //         if(val < a || val > b){
    //             arr.splice(i, 1)
    //             i--
    //         }
    //     }
    // }
    // let arr = [5,3,8,1]
    // filterRangeInPlace(arr, 1, 4)
    // console.log(arr)

/********************************************************** */
//Sort in decreasing order 
    // let arr = [5, 2, 1, -10, 8]
    // function sortDecreasing(arr){
    //     console.log(arr.sort((a,b)=> a-b).reverse())
    // }

    // sortDecreasing(arr)

/********************************************************* */
//Copy an array and then sort the copy, not modifying the original

        // let arr = ['HTML', 'Javascript', 'CSS']

        // const copySorted = arr => arr.slice().sort()
        
        // console.log(copySorted(arr))

/******************************************************* */
//write function to search an array for 'needle'
// let haystack = ['hay', 'junk', 'hey', 'moreJunk','needle', 'randomJunk']

    // function containsNeedle(haystack){
    //     let containsNeedle = haystack.includes('needle')
    //     if(containsNeedle === true){
    //         console.log(`found the needle at position ${haystack.indexOf('needle')}`)
    //     }
    // }

    // containsNeedle(haystack)

    // const containsNeedleTernary = haystack => {
    //     haystack.includes('needle') ? `found needle at position ${haystack.indexOf('needle')}` : false
    // }

    // console.log(containsNeedle(haystack))

/******************************************************* */
//Take an array and return a new array that contains every even number from the original array
    // let arr = [1,2,3,4,5,6]
    // const evenFinder = arr => arr.filter((n) => n % 2 === 0)
    // console.log(evenFinder(arr))

/******************************************************** */
//Sum all numbers in an array
    // let arr = [1,2,3,4,5,6,7,8]
    // const sumArray = arr => arr.reduce((acc,c) => +acc + +c, 0)
    // console.log(sumArray(arr))


/********************************************************* */
/********************************************************* */
/********************************************************* */


//constructor to create rpg toon
    // function Toon(name, characterClass, strength, speed, stamina, health){
    //     this.name = name
    //     this.characterClass = characterClass
    //     this.strength = strength
    //     this.speed = speed
    //     this.stamina = stamina
    //     this.health = health
    //     this.dexterity = Math.floor(speed/strength * 5)
    //     this.agility = Math.floor(speed/stamina * 5)
    //     this.resistance = Math.floor(health/strength * 5)
    //     this.recovery = Math.floor(health/stamina * 5)
        
    //     this.compareSpeed = function(toon) {
    //         switch(true){
    //             case this.speed > toon.speed: return [1, toon.name]
    //             case this.speed < toon.speed: return [0, toon.name]
    //             default: 
    //                 return [-1, toon.name]
    //         }
    //     }
    // //THIS IS BROKEN ************************************************************
    //     // this.compareStat = function(stat, toon){
    //     //     switch(true){
    //     //         case this[stat] > toon[stat]: return [1, toon.name]
    //     //         case this[stat] < toon[stat]: return [0, toon.name]
    //     //         default: 
    //     //             return [-1, toon.name]
    //     //     }
    //     // }

    //     this.compareHealth = function(toon) {
    //         switch(true){
    //             case this.health > toon.health: return [1, toon.name]
    //             case this.health < toon.health: return [0, toon.name]
    //             default: 
    //                 return [-1, toon.name]
    //         }
    //     }
        
    //     this.alertSpeedComparison = function(compareSpeed){
    //         switch(true){
    //             case compareSpeed[0] === 1: 
    //                 console.log(`${this.name} is faster than ${compareSpeed[1]}`)
    //                 break
    //             case compareSpeed[0] === 0:
    //                 console.log(`${this.name} is slower than ${compareSpeed[1]}`)
    //                 break
    //             default: 
    //                 console.log(`${this.name} and ${compareSpeed[1]} are evenly matched!`)
    //                 break
    //         }
    //     }

    //     this.alertHealthComparison = function(compareHealth){
    //         switch(true){
    //             case compareHealth[0] === 1: 
    //                 console.log(`${this.name} has more health than ${compareHealth[1]}`)
    //                 break
    //             case compareHealth[0] === 0:
    //                 console.log(`${this.name} has less health than ${compareHealth[1]}`)
    //                 break
    //             default: 
    //                 console.log(`${this.name} and ${compareHealth[1]} are evenly matched!`)
    //                 break
    //         }
    //     }
        
    // }

    // // let userSelectedName = prompt('What is your toons name??')
    // // let userSelectedClass = prompt('What is your toons class?')
    // // let userSelectedStrength = Number(prompt('What is your toons strength (1-10)?'))
    // // let userSelectedSpeed = prompt('What is your toons speed (1-10)?')
    // // let userSelectedStamina = prompt('What is your toons stamina (1-10)?')
    // // let userSelectedHealth = prompt('What is your toons health (1-10)?')

    // //const jarble = new Toon(userSelectedName, userSelectedClass, userSelectedStrength, userSelectedSpeed, userSelectedStamina, userSelectedHealth)
    // const flargle = new Toon('flargle', 'warrior', 9, 7, 9, 5)
    // const fleeble = new Toon('fleeble', 'pirate', 5, 10, 5, 5)
    // const blarble = new Toon('blarble', 'none', 10, 5 , 7, 9)

    /********************************************** */
    //write a function that takes a boolean and
    //returns 'true' if its true, 'false' if its false

    // const trueOrFalse = bool => bool === true ? 'Yes' : 'No'
    

    // console.log(trueOrFalse(true))

/************************************************** */
//Take an array and return all even values from it
    // let arr = [1,2,3,4,5,6,7,8]
    // console.log(arr.filter((n)=> n%2==0))

/************************************************ */
//Build a stopwatch

    // function Stopwatch(){
    //     let startTime, endTime, running, duration = 0;

    //     this.start = function(){
    //         if(running)
    //             throw new Error('Stopwatch is already running.')

    //         running = true;
    //         startTime = new Date()
    //     }

    //     this.stop = function(){
    //         if(!running)
    //             throw new Error('Stopwatch is not running.')

    //         running = false;
    //         endTime = new Date()

    //         const seconds = ((endTime.getTime() - startTime.getTime()) / 1000)
    //         duration += seconds
    //     }

    //     this.reset = function(){
    //         this.startTime = null
    //         this.endTime = null
    //         running = false
    //         duration = 0
    //     }

    //     Object.defineProperty(this, 'duration', {
    //         get: function() {return duration}
    //     })
    // }

    // let sw = new Stopwatch

/*********************************************************** */
//Write a function that takes an array of words and smashes them together into a sentence 
//and returns the sentence. You can ignore any need to sanitize words or add punctuation, 
//but you should add spaces between each word. 
//Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    // let words = ['hello', 'world', 'this', 'is', 'great']
    // const smash = arr => arr.join(' ')

    // console.log(smash(words))

/************************************************************** */
// //Create an empty object 'user'
//     let user = {}
// // Add the property name with the value John.
//     user.name = 'John'
// // Add the property surname with the value Smith.
//     user.surname = 'Smith'
// // Change the value of the name to Pete.
//     user.name = 'Pete'
// // Remove the property name from the object.
//     delete user.name

/*************************************************************** */
//Write the function isEmpty(obj) which returns true if the object has no properties, 
//false otherwise.
    // let schedule = {}

    // function isEmpty(obj){
    //     for(let key in obj){
    //         return false
    //     }
    //     return true
    // }
    // alert(isEmpty(schedule))
/*************************************************************** */
// Write the code to sum all salaries and store in the variable sum. 
    // let salaries = {
    //     John: 100,
    //     Ann: 160,
    //     Pete: 130
    // }
    // function sum(obj){
    //     let sum = 0
    //     for(let key in obj){
    //         sum += obj[key]
    //     }
    // return sum
    // }
    // console.log(sum(salaries))
// Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
/*************************************************************** */
// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies 
//all numeric property values of obj by 2.
    // let menu = {
    //     width: 200,
    //     height: 300,
    //     title: 'My menu'
    // }
    // function multiplyNumeric(obj){
    //     for(let key in obj){
    //         if(typeof obj[key] === 'number'){
    //             obj[key] *= 2
    //         }
    //     }
    // }
/*************************************************************** */
//Check to see if an object is empty
    // let obj = {}
    // function isEmpty(obj){
    //     for(let key in obj){
    //         return false
    //     }
    //     return true
    // }
/*************************************************************** */
// Create a function with two arguments that will return an array of 
// the first n multiples of x.
// Return the results as an array or list ( depending on language ).

    // function nMulitplesOfX(n, x){
    //     let z = []
    //     for(i=1; i <= n; i++){
    //         z.push(i * x)
    //     }
    //     return z
    // }
    // console.log(nMulitplesOfX(3, 3))

/*************************************************************** */
// Write a range function that takes two arguments, start and end, 
// and returns an array containing all the numbers from start up to (and including) end.`
        // function nToX(n, x){
        //     let z = []
        //     for(i=n;i <= x; i++){
        //         z.push(i)
        //     }
        //     return z
        // }
        // console.log(nToX(3,7))

        // function sum(arr){
        //     return arr.reduce((acc,c)=> acc + c)
        // }
        // console.log(sum(nToX(3,7)))
/*************************************************************** */
//n multiples of x
    // function nMulitplesOfX(n, x){
    //     let z = []
    //     for(i = 1; i <= n; i++){
    //         z.push(i * x)
    //     }
    //     return z
    // }
    // console.log(nMulitplesOfX(3, 3))
/*************************************************************** */
// In this little assignment you are given a string of space separated numbers, 
// // and have to return the highest and lowest number
// let str = '1 2 3 4 5 6'
// function highAndLow(numbers){
//     let arr = numbers.split(' ').sort((a,b) => a - b)
//     return `${arr[arr.length-1]} ${arr[0]}`
//   }
//  console.log(highAndLow(str))
  
// /*************************************************************** */
// // Create a function called shortcut to remove the lowercase vowels
// // (a, e, i, o, u ) in a given string. Return new string
// function shortcut (string) {
//     string.split('')
//     string.forEach(element => {
        
//     });
//   }
/*************************************************************** */
//create a function with two args that will
//return an array of the first n multiples of x
    // const nOfX = (n,x) => {
    //     let z = []
    //     for(i=1; i <= n; i++){
    //         z.push(i * x)
    //     }
    //     return z
    // }
    // console.log(nOfX(3,3))
/*************************************************************** */
//reverse string with loop
    // let str = 'i love boobs'
    // let newStr = ''
    // for(i=str.length-1; i>=0; i--){
    //     newStr += str[i]
    // }
    // console.log(newStr)
/*************************************************************** */
// Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 
// with the exponent ranging from 0 to n ( inclusive )
    // function powersOfTwo(n){
    //     let z = []
    //     for(i=0; i<=n; i++){
    //         z.push(2**i)
    //     }
    //     return z
    // }
    // console.log(powersOfTwo(3))
/*************************************************************** */
//API 1 (WAIFU PICS)

/*************************************************************** */
//reverse string with a loop
    // let str = 'i like big butts'
    // let newStr = ''
    // for(i=str.length-1; i >= 0; i--){
    //     newStr += str[i]
    // }
    // console.log(newStr)
/*************************************************************** */
    // function enough(cap, on, wait) {
    //     total = on + wait
    //     if(total > cap){
    //     return total - cap
    //     }else{
    //     return 0
    //     }
    // }

    // const enough = (cap, on, wait) => on + wait > cap ? (on + wait) - cap : 0 //better
/*************************************************************** */
//reverse string with loop
    // let str = 'lord i dont feel like going to work'
    // let newStr = ''
    // for(i=str.length-1;i>=0;i--){
    //     newStr += str[i]
    // }
    // console.log(newStr)
/*************************************************************** */
//take an array, return new array with every even number
    // let arr = [1,2,3,4,5,6,7,8]
    // let onlyEvens = arr => arr.filter(n => n % 2 === 0)
    // console.log(onlyEvens(arr))
/*************************************************************** */
    // function aliasGen(first, last){
    //     first.split('')
    //     last.split('')
    //     let firstName = first[0].toUpperCase()
    //     let lastName = last[0].toUpperCase()
    //     let arr = [firstName, lastName]
    //     return arr
    // }
    // console.log(aliasGen('lemon', 'butt'))
/*************************************************************** */
//take an array, returnn new array tht includes every even number
    // let arr = [1,2,3,4,5,6,7,8]
    // let newArr = arr.filter((n) => n % 2 === 0)
    // console.log(newArr)
/*************************************************************** */
//reverse string with loop
    // let str = 'I like squishy buns'
    // let newStr = ''
    // for(i=str.length-1;i>=0;i--){
    //     newStr += str[i]
    // }
    // console.log(newStr)
/*************************************************************** */
//Write a function that accepts an integer n and a string s as parameters, 
//and returns a string of s repeated exactly n times.
    // function repeatStr (n, s) {
    //     let newStr = ''
    //     for(i=n;i>0;i--){
    //         newStr += s
    //     }
    //     return newStr;
    // }

    // console.log(repeatStr(3,'boobs'))

    // const repeatStr = (n,s) => s.repeat(n) //this is the better way to do it

    // console.log(repeatStr(3,'butt'))
/*************************************************************** */
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel


//covert string to array
//filter out everything that isnt a vowel into a new arr
//convert arr to string
//return new string
/*************************************************************** */
    // class Dog {
    //     constructor(name, species, size){
    //         this.name = name
    //         this.species = species
    //         this.size = size
    //     }
    //     bark(){
    //         if(this.height > 60){
    //             return 'Grrr! Grrr!'
    //         }else{
    //             return 'Woof! Woof!'
    //         }
    //     }
    // }

    // const fang = new Dog("Fang", "boarhound", 75);
    // console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
    // console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

    // const snowy = new Dog("Snowy", "terrier", 22);
    // console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
    // console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
/*************************************************************** */
// Character inventory
// Improve the example RPG to add character inventory management according to the following rules: 

// A character's inventory contains a number of gold and a number of keys. √

// Each character begins with 10 gold and 1 key. √

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.
/*************************************************************** */
    // class Character {
    //     constructor(name, health, strength) {
    //       this.name = name;
    //       this.health = health;
    //       this.strength = strength;
    //       this.gold = 10; //start with 10
    //       this.keys = 1; //start with 1
    //       this.xp = 0; // XP is always zero for new characters
    //     }
    //     // Attack a target
    //     attack(target) {
    //       if (this.health > 0) {
    //         const damage = this.strength;
    //         console.log(
    //           `${this.name} attacks ${target.name} and causes ${damage} damage points`
    //         );
    //         target.health -= damage;
    //         if (target.health > 0) {
    //           console.log(`${target.name} has ${target.health} health points left`);
    //         } else {
    //           target.health = 0;
    //           const bonusXP = 10;
    //           console.log(
    //             `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold and ${this.keys} key(s)`
    //           );
    //           this.xp += bonusXP;
    //           this.gold += target.gold;
    //           this.keys += target.keys;
    //         }
    //       } else {
    //         console.log(`${this.name} can’t attack (they've been eliminated)`);
    //       }
    //     }
    //     // Return the character description
    //     describe() {
    //       return `${this.name} has ${this.health} health points, ${this
    //         .strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
    //     }
    //   }

    // const aurora = new Character("Aurora", 150, 25);
    // const glacius = new Character("Glacius", 130, 30);

    // console.log("Welcome to the adventure! Here are our heroes:");
    // console.log(aurora.describe());
    // console.log(glacius.describe());

    // const monster = new Character("Spike", 40, 20);
    // console.log("A wild monster has appeared: it's named " + monster.name);

    // monster.attack(aurora);
    // monster.attack(glacius);
    // aurora.attack(monster);
    // glacius.attack(monster);

    // console.log(aurora.describe());
    // console.log(glacius.describe());
/*************************************************************** */
// Create a function with two arguments that will return an array of the first n multiples of x.
// Return the results as an array or list ( depending on language ).
//   function nMulitplesOfX(n,x){
//     let z = []
//     for(i=1;i<=n;i++){
//         z.push(x*i)
//     }
//     return z
//   }
/*************************************************************** */
//check to see if object is empty
//    function isEmpty(obj){
//     for(let key in obj){
//         return false //loop only runs if obj is NOT empty
//     }
//     return true
//    }
/*************************************************************** */
//Create a function with two arguments that will return an array of the first n multiples of x.
//Return the results as an array or list ( depending on language ).
    // function nMulitplesOfX(n,x){
    //     let z = []
    //     for(i=1;i<=n;i++){
    //         z.push(x*i)
    //     }
    //     return z
    // }
/*************************************************************** */
//check to see if object is empty
    // function isEmpty(obj){
    //     for(let key in obj){
    //         return false
    //     }
    //     return true
    // }
/*************************************************************** */
//implement a function that adds two numbers together and returns their sum in binary
    // function addBinary(a,b){
    //     return (a+b).toString(2)
    // }
    // const addBinary = (a,b) => (a+b).toString(2)
/*************************************************************** */
//Write a function that checks if a given string (case insensitive) is a palindrome.
// function isPalindrome(x){
//     let y = x.split('').reverse().join('')
//     if(x===y){
//         console.log(`${x} is a palindrome`)
//     }else{
//         console.log(`${x} is not a palindrome`)
//     }
// }
    // const isPalindrome = x => x.split('').reverse().join('') === x 
    // console.log(isPalindrome('boobs'))
    // console.log(isPalindrome('boob'))
/*************************************************************** */
//reverse string with loop
    // function reverseString(str){
    //     let revStr = ''
    //     for(i=str.length-1;i>=0;i--){
    //         revStr += str[i]
    //     }
    //     return revStr
    // }

    // console.log(reverseString('boobs'))
/*************************************************************** */
//Implement a function that adds two numbers together and returns their sum in binary
    //const addBinary = (a,b) => (a+b).toString(2)
/*************************************************************** */
//check to see if an object is empty
    // function isEmpty(obj){
    //     for(let key in obj){
    //         return false
    //     }
    //     return true
    // }
/*************************************************************** */
//function with two args that returns an array of first n multiples of x
    // function nMulitplesOfX(n,x){
    //     let z = []
    //     for(i=1;i<=n;i++){
    //         z.push(x*i)
    //     }
    //     return z
    // }
/*************************************************************** */
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
    // function firstNonConsecutive(arr) {
    //     for (let i = 0; i < arr.length - 1; ++i) {
    //       if (arr[i] + 1 !== arr[i + 1]) {
    //         return arr[i + 1]
    //       }
    //     }
    //     return null
    //   }
/*************************************************************** */
//implement a function that takes two numbers and returns their sum in binary
    //const binarySum = (a,b) => (a + b).toString(2)
/*************************************************************** */
//find the first non-consecutive element in an array of numbers
//return null if array is consecutive
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i] + 1 !== arr[i+1]){
    //             return arr[i+1]
    //         }
    //     }
    //     return null
    //     }
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i]+1 !== arr[i+1]){
    //             return arr[i + 1]
    //         }
    //     }
    //     return null
    // }
    // let arr = [1,2,3,4,6,7,8,9]
    // console.log(firstNonConsecutive(arr))
/*************************************************************** */
//sum all numbers in an array
    //let sum = arr.reduce((s,acc) => +s + +acc)
/*************************************************************** */
//find the first non-consecutive element in an array, otherwise return null
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i]+1 !== arr[i+1]){
    //             return arr[i+1]
    //         }
    //     }
    //     return null
    // }
    // let arr1 = [1,2,3,4,6,7,8]
    // let arr2 = [1,2,3,4,5,6,7,8]
    // console.log(firstNonConsecutive(arr1))
    // console.log(firstNonConsecutive(arr2))
/*************************************************************** */
//sum all numbers in an array
    // let arr = [1,2,3,4,5,6,7,8,9]
    // // function sumArray(arr){
    // //     return arr.reduce((c,acc)=> +c + +acc)
    // // }
    // const sumArray = arr => arr.reduce((c,acc)=> +c + +acc)
    // console.log(sumArray(arr))
/*************************************************************** */
//Look for a specific object 'obj23' in array of objects 'arrOfObj'

    // let arrOfObj = [
    //     {
    //         id: 1,
    //         name: 'test1'
    //     },
    //     {
    //         id: 2,
    //         name: 'test2'
    //     },
    //     {
    //         id: 'obj23',
    //         name: 'test3'
    //     }
    // ]
    // let specificObject = arrOfObj.find(item => item.id == 'obj23')
    // console.log(specificObject)
/*************************************************************** */
//raise a number to a power
    // let n = 6
    // let m = 6^3 //dont really know what this is doing, NOT raising to a power
    // let o = 6**2
    // let p = Math.pow(6,2)
    // let arr = [n,m,o,p]
    // console.log(arr)
/*************************************************************** */
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. 
// Pairing two 0s generates one 0 at the location of the first one.
// let arr = [0,1,0,2]
// const pairZeros = (a,f) => a.filter(n => n || (f = !f))
/*************************************************************** */
//declare a calss named 'MakeCar' with 4 properties and 2 methods
    // class MakeCar{
    //     constructor(carMake,carModel,carColor,numOfDoors){
    //         this.make = carMake
    //         this.model = carModel
    //         this.color = carColor
    //         this.doors = numOfDoors
    //     }
    //     honk(){
    //         alert('BEEP BEEP FUCKER')
    //     }
    //     lock(){
    //         alert(`Locked ${this.doors} doors!`)
    //     }
    // }
/*************************************************************** */
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. 
// Pairing two 0s generates one 0 at the location of the first one.

    // const pairZeros = (a,f) => a.filter(n => n || (f = !f))
/*************************************************************** */
    // class MakeCar{
    //     constructor(make, model, doors, factoryColor){
    //         this._make = make
    //         this._model = model
    //         this._doors = doors
    //         this._factoryColor = factoryColor
    //     }
    //     beep(){
    //         alert('BEEP BEEP FUCKER')
    //     }
    //     alarm(){
    //         alert('BACK THE FUCK UP')
    //     }
    // }
/*************************************************************** */
//-----TRIMMING A STRING-----

// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the maximum string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

    // function trim(str, maxLength){
    //     if(maxLength <= 3){
    //         return str.substring(0,maxLength) + '...'
    //     }else if(str.length <= maxLength){
    //         return str
    //     }else{
    //         return str.slice(0,maxLength -3) + '...'
    //     }
    // }

    // console.log(trim('Creating kata is fun', 14))
/*************************************************************** */
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired.
// Pairing two 0s generates one 0 at the location of the first one.
// function pairZeros(a, f){
//     return a.filter(n => n || (f != f))
// }       // i dont really get how this works
    // const pairZeros = (a,f) => a.filter(n => n || (f != f))
    // const pairZeros = (a,f) => a.filter(n => n || (f != f))
    // const pairZeros = (a,f) => a.filter(n => n || (f != f))
/*************************************************************** */
//easiest way to sum nums in array?
    // const numSum = arr => arr.reduce((sum,current)=> +sum + +current)
/*************************************************************** */
    // function mystery() {
    //     var results =
    //     {sanity: 'Hello'};
    //     return results;
    // }
    // const mysteryBetter = () => ({sanity: 'Hello'}) 
    // console.log(mystery())
    // console.log(mysteryBetter())
/*************************************************************** */
//take an array and return every even number in a new array
    // let arr = [1,2,3,4,5,6,7,8,9]
    // const arrayOfEvens = arr => arr.filter((n => n % 2 === 0 ))

    // console.log(arrayOfEvens(arr))
/*************************************************************** */
//find nearest sqaure number to provided number
    //const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
//dont really know entirely how it works, just accept that it does for now 2/7/23
/*************************************************************** */
//check to see if object is empty 
    // function isEmpty(obj){
    //     for(let key in obj){
    //         return false
    //     }
    //     return  true
    // }
/*************************************************************** */
//sort an array in ascending order numerically
    // let arr = [1,4,5,3,2,7,9,8]
    // function sortArrayAscending(arr){
    //     return arr.sort((a,b)=> a - b)
    // }
    // console.log(sortArrayAscending(arr))
/*************************************************************** */
// Create a function with two arguments that will return an array of the first n multiples of x.
// Return the results as an array or list ( depending on language ).
    // function nMulitplesOfX(n,x){
    //     let z = []
    //     for(i=1;i<=n;i++){
    //         z.push(x * i)
    //     }
    //     return z
    // }
    // console.log(nMulitplesOfX(3,4))
/*************************************************************** */
//declare a class named 'MakeCar' with 4 properties and 2 methods
    // class MakeCar{
    //     constructor(make,model,doors,color){
    //         this._make = make
    //         this._model = model
    //         this._doors = doors
    //         this._color = color
    //         }
    //         honk(){
    //             console.log('bbep')
    //         }
    //         start(){
    //             console.log('vvrom')
    //         }
    // }

    // let beem = new MakeCar('BMW', '325es', 2, 'Delphin')
/*************************************************************** */
//what is the easiest way to sum all numbers in an array?
    // let arr = [1,2,3,4,5,6,7,8,9]
    // function sumArray(arr){
    //     return arr.reduce((acc, c)=> +acc + +c)
    // }
    // console.log(sumArray(arr))
/*************************************************************** */
//How do you look for a specific object in an array of objects?
    // let arrOfObj = [{name: 'Bob', age: 21}, {name: 'Terry', age: 32}, {name: 'Skrimy', age: '321'}]
    // //look for obj with name of 'Skrimy'
    // const findObjInArrByName = (arr, name) => arr.find(obj=>obj.name == name)
    // console.log(findObjInArrByName(arrOfObj, 'Skrimy'))
    // //look for obj with age of 32
    // const findObjInArrByAge = (arr,age) => arr.find(obj=>obj.age == age)
    // console.log(findObjInArrByAge(arrOfObj, 32))
/*************************************************************** */
//sort array in ascending numerical order
/**** BE CAREFUL WHEN USING SORT AS IT MUTATES THE ORIGINAL ARRAY, TRY SLICING THE ORIGINAL ARRAY FIRST ***/
    // function sortArrayAscending(arr){
    //     return arr.slice().sort((a,b)=> a-b) //by slicing the original array you keep sort from mutating it 
    // }
    // //could also do
    // const sortArrayAscendingArrow = arr => arr.slice().sort((a,b)=> a-b)
    // console.log(sortArrayAscending(arr))
    // console.log(sortArrayAscendingArrow(arr))
    // console.log(arr)//logged to show that original array is NOT MUTATED 
    // console.log(arrOfObj)
/******************************************************************** */
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired.
// Pairing two 0s generates one 0 at the location of the first one.
//const pairZeros = (a,f)=>a.filter(n=>n||(f=!f))
//const pairZeros = (a, f) => a.filter(n => n || (f != f))
    //const pairZeros = (arr, f) => arr.filter(element => element || (f != f))

    //const pairZeros = (arr, zero) => arr.filter(element => element || (zero != zero)) // for each element return that element or huh? not entirely sure 
/********************************************************************* */
//FIND THE FIRST ELEMENT IN THE PROVIDED ARRAY THAT IS NOT CONSECUTIVE
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i] + 1 !== arr[i + 1]){
    //             return arr[i + 1]
    //         }
    //     }
    //     return 'Provided array is consecutive'
    // }

    //second attempt
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i] + 1 !== arr[i + 1]){
    //             return arr[i + 1]
    //         }
    //     }
    //     return null
    // }

    // console.log(firstNonConsecutive(nonconsecutiveArr))
    // console.log(firstNonConsecutive(consecutiveArr))
/********************************************************************* */
//FIND THE NEAREST SQUARE TO THE PROVIDED NUMBER
    // const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
    // console.log(nearestSq(112))
    // console.log(nearestSq(9))
/********************************************************************* */
//SORT AN ARRAY IN ASCENDING NUMBERICAL ORDER (WITHOUT MUTATING ORIGINAL ARRAY)
    // const sortArrayAscending = arr => arr.slice().sort((a,b)=> a-b)
    // console.log(sortArrayAscending(nonAscendingArr))
    // console.log(nonAscendingArr)
/********************************************************************* */
//SORT AN ARRAY IN DESCENDING NUMERICAL ORDER (WITHOUT MUTATING ORIGINAL ARRAY)
    // const sortArrayDescending = arr => arr.slice().sort((a,b)=> b-a)
    // console.log(sortArrayDescending(acscendingArr))
    // console.log(acscendingArr)
/********************************************************************* */
//SQUARE EVERY ELEMENT OF AN ARRAY AND COMBINE INTO ONE SUM
    // const sqaureSum = arr => arr.reduce((sum,num)=> +sum + (num ** 2), 0)
    // console.log(sqaureSum(consecutiveArr))
/********************************************************************* */
//SUM TWO NUMS, RETURN RESULT IN BINARY
    // function binarySum(a,b){
    //     return (a+b).toString(2)
    // }
    // const binarySum = (a,b)=>(a+b).toString(2)
    // const binarySum = (a,b)=>(a+b).toString(2)
    // const binarySum = (a,b)=>(a+b).toString(2)
/********************************************************************* */
//SQUARE EVERY ELEMENT OF AN ARRAY AND SUM IT
    // const sumOfSquares = arr => arr.reduce((sum,num)=> +sum + (num * num))
    // console.log(sumOfSquares(consecutiveArr))
/********************************************************************* */
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i + 1] !== arr[i] + 1){
    //             return arr[i + 1]
    //         }
    //     }
    //     return 'Tiidi'
    // }
    // console.log(firstNonConsecutive(nonconsecutiveArr))
    // console.log(firstNonConsecutive(consecutiveArr))
/********************************************************************* */
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired.
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (a,f) => a.filter(n => n || (f = !f))
/********************************************************************* */
//DECLARE A CLASS NAMED 'MAKECAR' WITH 4 PROPERTIES AND 2 METHODS
    // class MakeCar{
    //     constructor(make,model,doors,color){
    //         this._make = make
    //         this._modlel = model
    //         this._doors = doors
    //         this.color = color //this could change, unlike the other properties
    //     }
    //     honk(){
    //         alert('bbbepp')
    //     }
    //     lock(){
    //         alert('doors are locked')
    //     }
    // }

    // let zCar = new MakeCar('Datsun', '240z', 2, 'Black')
/********************************************************************* */
//SORT ARRAY IN ASCENDING NUMERICAL ORDER
    //const sortArrayAscending = arr => arr.slice().sort((a,b)=> a - b)
/********************************************************************* */
//RETURN THE CENTURY FOR A GIVEN YEAR
    // const century = year => Math.ceil(year/100)//ceiling method rounds up to nearest 100
    // console.log(century(1245))
    // console.log(century(1200))
/********************************************************************* */
//FIND NEAREST SQUARE NUM TO PR0VIDED NUM
    //const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
/********************************************************************* */
//FIND OBJ WITH NAME PROPERTY 'Skrimy'
    // const findName = (arr, name) => arr.find(e => e.name == name)
    // console.log(findName(arrOfObj, 'Skrimy'))
    // console.log(findName(arrOfObj, 'Bob'))
    // console.log(findName(arrOfObj, 'Boob'))
/********************************************************************* */
//RETURN THE CENTURY FOR A GIVEN YEAR
    // const century = year => Math.ceil(year/100)
    // console.log(century(1701))
    // console.log(century(1700))
/********************************************************************* */
//CHECK TO SEE IF SHAPE IS CUBE WHEN GIVEN VOLUME AND LENGTH OF ONE SIDE
    //const cubeChecker = (volume,side) => volume > 0 && side > 0 && volume === Math.pow(side, 3)
/********************************************************************* */
//SQUARE EVERY ELEMENT OF AN ARRAY AND COMBINE INTO ONE SUM
    // const sqaureSum = arr => arr.reduce((sum, num)=> +sum + (num * num))
    // console.log(sqaureSum([1,2,3]))
/********************************************************************* */
//CHECK TO SEE IF SHAPE IS CUBE WHEN GIVEN VOLUME AND LENGTH OF ONE SIDE
    //const cubeChecker = (vol, side) => vol > 0 && side > 0 && vol === Math.pow(side, 3)
/********************************************************************* */
//CHECK TO SEE IF SHAPE IS CUBE WHEN GIVEN VOLUME AND LENGTH OF ONE SIDE
    //const isCube = (side,vol) => side > 0 && vol > 0 && vol === Math.pow(side,3)
/********************************************************************* */
//SORT AN ARRAY IN NUMERICAL ASCENDING ORDER
    // const sortArrayAscending = arr => arr.sort((a,b)=> a-b)
    // console.log(sortArrayAscending(nonAscendingArr))
/********************************************************************* */
//RETURN THE CENTURY FOR A GIVEN YEAR
    // const century = num => Math.ceil(num/100)
    // console.log(century(1100))
    // console.log(century(1000))
    // console.log(century(1001))
    // console.log(century(999))
/********************************************************************* */
//FIND NEAREST SQUARE NUM TO PROVIDED NUM 
    //const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0'S PAIRED
//PAIRING TWO 0'S GENERATES ONE 0 AT THE LOCATION OF THE FIRST ONE
    //const pairZeros = (arr,f) => arr.filter(n => n || (f = !f))
/********************************************************************* */
//SUM ALL NUMS IN AN ARRAY
    // const sumArray = arr => arr.reduce((sum, num)=> +sum + +num)
    // console.log(sumArray(acscendingArr))
/********************************************************************* */
//DECLARE A CLASS NAMED 'MakeCar' WITH 4 PROPERTIES AND 2 METHODS
        // class MakeCar {
        //     constructor(make, model, doors, color){
        //         this._make = make
        //         this._model = model
        //         this._doors = doors
        //         this.color = color //this could change
        //     }
        //     honk(){
        //         console.log('bepp')
        //     }
        //     lock(){
        //         console.log(`Locked ${this._doors} doors`)
        //     }
        // }
        // let zCar = new MakeCar('Datsun', '240z', 2, 'Green')
/********************************************************************* */
//FIND THE FIRST ELEMENT OF AN ARRAY OF NUMS THAT IS NOT CONSECUTIVE
    // function firstNonConsecutive(arr){
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i + 1] !== arr[i] + 1){
    //             return arr[i + 1]
    //         }
    //     }
    //     return null
    // }
    // console.log(firstNonConsecutive(consecutiveArr))
    // console.log(firstNonConsecutive(nonconsecutiveArr))
/********************************************************************* */
//CHECK TO SEE IF SHAPE IS CUBE WHEN GIVEN VOLUME AND LENGTH OF ONE SIDE
    // const isCube = (vol, side) => vol > 0 && side > 0 && vol === Math.pow(side, 3)
    // console.log(isCube(27,3))
    // console.log(isCube(9,2))
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
    //const pairZeros = (arr, f) => arr.filter((n => n || f != f))
/********************************************************************* */
//FIND SPECIFIC OBJECT IN ARRAY OF OBJECTS
    //FIND OBJ WITH AGE 21 IN arrOfObj

    // const findObjInArrByAge = (arr, age) => arr.find(item => item.age == age)
    // console.log(findObjInArrByAge(arrOfObj, 21))
/********************************************************************* */
//Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

    //const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (arr, f) => arr.filter((n => n || f != f))
    //const pairZeros = (arr, f) => arr.filter((n => n || f != f))
/********************************************************************* */
//REVERSE STRING WITH A LOOP
    // let str = 'Tiddies in my face'

    // //const reverseString = str => str.split('').reverse().join('') //not a loop
    // function reverseStringWithLoop(str){
    //     let z = '' // make sure to declare this var outside of loop 
    //     for(i = str.length -1; i >= 0; i--){
    //         z += str[i]
    //     }
    //     return z
    // }

    // console.log(reverseStringWithLoop(str))
    //beep

/********************************************************************* */
// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

    //const isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a ? true : false
/********************************************************************* */
//square every element of an array and combine in to one sum
    //const sqaureSum = arr => arr.reduce((sum, num)=> +sum + (num * num), 0)
/********************************************************************* */
//find the first element of an array of numbers that is not consecutive.
    // function firstNonConsecutive(arr) {
    //     for(i=0;i < arr.length-1;i++){
    //         if(arr[i] + 1 != arr[i+1]){
    //             return arr[i+1]
    //         }
    //     }
    //     return null
    // }
    // console.log(firstNonConsecutive(consecutiveArr))
    // console.log(firstNonConsecutive(nonconsecutiveArr))
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (arr, f) => arr.filter(n => n || (f = !f))
/********************************************************************* */
//CHECK TO SEE IF SHAPE IS CUBE WHEN GIVEN VOLUME AND LENGTH OF ONE SIDE
    // const isCube = (v,l) => v > 0 && l > 0 && Math.pow(l, 3) === v
    // console.log(isCube(27, 3))
    // console.log(isCube(37, 3))
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

    // const findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1, 2) : -1
    // console.log(findNextSquare(4))
    // console.log(findNextSquare(5))
/********************************************************************* */
//RETURN THE CENTURY FOR A GIVEN YEAR
    // const century = year => (Math.ceil(year/100))

    // console.log(century(1200))
    // console.log(century(1201))
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

    // const findNextSquare = num => Number.isInteger(Math.sqrt(num)) ? Math.pow(Math.sqrt(num)+1, 2) : -1
    // console.log(findNextSquare(4))
    // console.log(findNextSquare(5))
/********************************************************************* */
//find nearest sqaure number to provided number
    //const nearestSq = n => Math.power(Math.round(Math.sqrt(n)), 2)
/********************************************************************* */
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs.
//Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop

    //const remainingPassengers = arr = arr.reduce((remaining, [on, off])=> remaining + on - off, 0)
/********************************************************************* */
//create a function to check if obj is empty
    // function isEmpty(obj){
    //     for(let key in obj){
    //         return false
    //     }
    //     return true
    // }
/********************************************************************* */
//easiest way to sum all nums in an array
    //const sumArray = arr => arr.reduce((sum, num)=> +sum + +num, 0)
/********************************************************************* */
// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs.
//Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop
/********************************************************************* */
    //const remainingPassengers = arr => arr.reduce((onBus, [on, off])=> onBus + on - off, 0)
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
    //const findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n)+1, 2) : -1
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (a,f) => a.filter(n => n || (f = !f)) 
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (arr,f) => arr.filter(n=> n || (f = !f))
/********************************************************************* */
//declare class 'MakeCar' with 4 properties and 2 methods
    // class MakeCar {
    //     constructor(make,model,color,doors){
    //         this._make = make,
    //         this._model = model,
    //         this.color = color,
    //         this._doors = doors
    //     }
    //         honk(){
    //             console.log('bbbepep')
    //         }
    //         lock(){
    //             console.log(`locked it tahe fuckk up ${this._doors} door style`)
    //         }
    // }
    // let scrujb = new MakeCar('mazonda', 'proplyyi', 'hot pink', 3)
/********************************************************************* */
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs.
//Elements of each pair represent the number of people that get on the bus (the first item) 
//and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, 
//they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
//So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop

    //const remainingPassengers = arr = arr.reduce((remaining, [on, off])=> remaining + on - off, 0)
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

    //const findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.round(Math.sqrt(n) + 1), 2) : -1
/********************************************************************* */
// Find obj with name 'booty' in array of objects 'coolStuff'
    // let coolStuff = [{name: 'cheekz', cool: true}, {name: 'buns', cool: true}, {name: 'booty', cool: true}]
    // const findCoolThing = (arr, lookinFor) => {
    //     let found = arr.find(item => item.name == lookinFor)
    //     return found
    // }

    // console.log(findCoolThing(coolStuff, 'booty'))
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (a,f) => a.filter(n => n || (f = !f))
/********************************************************************* */
// Create a function with two arguments that will return an array of the first n multiples of x.
// Return the results as an array or list ( depending on language ).
    // const nMulitplesOfX = (n, x) => {
    //     let arr = []
    //     for(i=1;i<=n;i++){
    //         arr.push(i * x)
    //     }
    //     return arr
    // }

    // console.log(nMulitplesOfX(3,3))
    // console.log(nMulitplesOfX(6,4))
    // console.log(nMulitplesOfX(2,27))
/********************************************************************* */
// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
    //const isTriangle = (a,b,c) => a + b > c && a + c > b && b + c > a 
/********************************************************************* */
//Take an array and return a new array that includes every even number from the original array. What method should you use?
    // const onlyEvens = arr => arr.filter(n => n % 2 === 0)
    // console.log(consecutiveArr)
    // console.log(onlyEvens(consecutiveArr))
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
    // const findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.round(Math.pow(Math.sqrt(n)+1, 2)) : -1
    // console.log(findNextSquare(4))
    // console.log(findNextSquare(9))
    // const perfectSquaresToN = n => {
    //     let z = []
    //     for(i=1; i<n; i++){
    //         z.push(findNextSquare(i))
    //     }
    //     return z.filter(n => n != -1)
    // }
    // console.log(perfectSquaresToN(16))
/********************************************************************* */
//How do you sort an array in numerical order? (ascending)
    // const sortArrayAscending = arr => arr.sort((a,b)=> a - b )
    // console.log(sortArrayAscending(unorderedArrOfNums))
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (arr, f) => arr.filter(n => n || (f = !f))
/********************************************************************* */
// You are provided with a list (or array) of integer pairs.
//Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop
    //const remainingPassengers = arr => arr.reduce((cur, [on, off]) => cur + on - off, 0)
/********************************************************************* */
//find nearest square to provided num
    //const nearestSq = n => Math.power(Math.round(Math.sqrt(n)), 2)
/********************************************************************* */
//Return the century for a given year
    //const century = year => Math.ceil(year/100)
/********************************************************************* */
//


                            // STATUS REPORT
                            //been at it for a minute


//
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
    // const findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1

    // console.log(findNextSquare(4))                           NICE WORK!!!!
    // console.log(findNextSquare(5))
/********************************************************************* */


/********************************************************************* */
/********************************************************************* */
/********************************************************************* */

    // class Character{
    //     constructor(name,age,height,dob, title,quote){
    //         this.name = name
    //         this.age = age
    //         this.height = height
    //         this.dob = dob
    //         this.title = title
    //         this.quote = quote
    //     }
    // }

    // let gendoIkari = new Character('Gendo Ikari', 48, 192, '04/29/1967', 'Commander of NERV', 'Mankind\'s greatest fear is mankind itself.')
    // let ritsukoAkagi = new Character('Ritsuko Akagi', 30, 166, '11/21/1985','NERV Chief Scientist', 'Even though a hedgehog may want to become close with another hedgehog. The closer they get the more they injure each other with their spines.')
    // let shinjiIkari = new Character('Shinji Ikari', 14, 'unknown', '06/06/2001', 'Pilot Eva-01', 'I mustn\'t run away')
    // let reiAyanami = new Character('Rei Ayanami', 14, 'unknown', 'unknown', 'Pilot Eva Unit-00', 'Those who hate themselves cannot love or trust others.')
    // let asukaLSoryu = new Character('Asuka Langley Soryu', 13, 'unknown', '12/04/2001', 'Pilot Eva Unit-02', 'It is simply the duty of the elite to protect the ignorant masses.')
    // let misatoKatsuragi = new Character('Misato Katsuragi', 29, 166, '12/08/1986', 'Major, NERV Tactical Operations Branch', 'Part of growing up means finding away to interact with others while distancing pain.')
    // let ryojiKaji = new Character('Ryoji Kaji', 30, 182, '06/17/1985', 'NERV Chief Inspector', 'So, I understand you\'re living with Katsuragi.')
    // let kozoFuyutsuki = new Character('Kozo Fuyutsuki', 59, 189, '04/09/1956', 'NERV Vice Commander', 'Your truth can be changed simply by the way you accept it. That\'s how fragile the truth for a human is.')
    // let kensukeAida = new Character('Kensuke Aida', 14, 147, '09/12/2001', 'Eva pilot candidate', 'Huh? Oh, don\'t worry about my mother. I don\'t have one of those.' )
    // let yuiIkari = new Character('Yui Ikari', 'Deceased (27)','unknown', '03/30/1977', 'Gehirn Bioengineer', 'Anywhere can be a paradise as long as you have the will to live.')
    // let kaworuNagisa = new Character('Kaworu Nagisa', 15, 'unknown', '09/13/2000', 'Fifth Child/17th Angel', 'Since the heart feels pain so easily some believe life is pain.')
    // let naokoAkagi = new Character('Naoko Akagi', 'deceased', 'unknown', 'unknown', 'Gehirn Chief Scientist', 'none')
/********************************************************************* */
//find the first element of an array of numbers that is not consecutive.
    // const firstNonConsecutive = arr => {
    //     for(i=0;i<arr.length-1;i++){
    //         if(arr[i] + 1 !== arr[i + 1]){
    //             return arr[i + 1]
    //         }
    //     }
    //     return null
    // }
    // console.log(firstNonConsecutive(consecutiveArr))
    // console.log(firstNonConsecutive(nonconsecutiveArr))
/********************************************************************* */
////CHECK TO SEE IF SHAPE IS CUBE WHEN GIVEN VOLUME AND LENGTH OF ONE SIDE
    // const isCube = (vol, l) => vol === l * l *l
    // console.log(isCube(9,3))
    // console.log(isCube(27,3))
/********************************************************************* */
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

    // const oddEvens = s => {
    //     let odd = s.split('').filter((e,i)=> i % 2 !== 0).join('')
    //     let even = s.split('').filter((e,i)=> i % 2 === 0).join('')
    //     return even + ' ' + odd
    // } 
    // console.log(oddEvens('CodeWars'))

/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (arr, f) => arr.filter((n)=> n || (f != f))
/********************************************************************* */
//find obj with age 32 in array of objects
    // const findObjInArrByAge = (arr, age) => arr.find((obj)=> obj.age === age)
    // console.log(findObjInArrByAge(arrOfObj, 32))
    // console.log(findObjInArrByAge(arrOfObj, 22))
/********************************************************************* */
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

    // const lineNumbers = str => str.map((n, i)=> `${i+1}: ` + n )

    // console.log(lineNumbers(["a", "b", "c"]))
/********************************************************************* */
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

    // const oddEvens = str => {
    //     let even = str.split('').filter((n, i)=> i % 2 === 0).join('')
    //     let odd = str.split('').filter((n, i)=> i % 2 !== 0).join('')
    //     return even + ' ' + odd
    // }
    // console.log(oddEvens('Codewars'))
/********************************************************************* */
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs.
//Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
//Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop

    //let remainingPassengers = arr => arr.reduce((total, [on, off])=> total + on - off, 0)
/********************************************************************* */
// Implement a function that adds two numbers together and returns their sum in binary
    //const binarySum = (a, b) => (a + b).toString(2)
/********************************************************************* */
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []    
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

    //const lineNumbers = arr => arr.map((c, i)=> `${i+1}: ${c}`)
/********************************************************************* */
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

    //const appendStr = arr => arr.map((v,i)=> `${i+1}: ${v}`)

/********************************************************************* */
//reverse a string using built in methods
    // const reverseString = str => str.split('').reverse().join('')
    // console.log(reverseString('boobs'))
/********************************************************************* */
//reverse string with loop
    // const reverseStringWithLoop = str => {
    //     let z = ''
    //     for(i=str.length-1;i>=0;i--){
    //         z += str[i]
    //     }
    //     return z
    // }
    // console.log(reverseStringWithLoop('boobs'))
/********************************************************************* */
//Implement a function that adds two numbers together and returns their sum in binary
    //const binarySum = (a,b) => (a + b).toString(2)
/********************************************************************* */
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

    // const evenOdds = str => {
    //     let even = str.split('').filter((v,i)=> i % 2 === 0).join('')
    //     let odd = str.split('').filter((v,i)=> i % 2 !== 0 ).join('')
    //     return `${even} ${odd}`
    // }

    //console.log(evenOdds('CodeWars'))
/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.

    //const pairZeros = (arr, v) => arr.filter(n => n || (v = !v)) 
/********************************************************************* */
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
//Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

    //const findNextSquare = n => Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(num)+1, 2) : -1
/********************************************************************* */
//check to see if two strings are anagrams

    // const isAnagram = (str1, str2) => {
    //     let a = str1.split('').sort().join('')
    //     let b = str2.split('').sort().join('')
    //     return a === b
    // }
/********************************************************************* */
//find nearest square to provided number
    //const nearestSq = n => Math.power(Math.round(Math.sqrt(n)), 2) //take sqaure root of n, round it, square it. 
/********************************************************************* */
//square every element of an array and combine in to one sum
    //const squaresSum = arr => arr.reduce((sum,cur)=> +sum + (cur ** 2), 0)
/********************************************************************* */
//return the century for a given year
    //const century = year => Math.ceil(year/100)
/********************************************************************* */
//find nearest sqaure to provided num
    //const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
/********************************************************************* */
//check to see if two strings are anagrams 
    //const isAnagram = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('')
/********************************************************************* */
//BINARY SEARCH
    // let arr = [1,2,3,4,5,6,7,8]
    // let start = 0
    // let end = length - 1
    // let target = 8

    // function binarySearch(arr, start, end, target){
    //     if(start > end) return false
    //     let middleIndex = Math.floor((start + end) / 2)
    //     if(arr[middleIndex] === target) return true
    //     if(arr[middleIndex] > target) return binarySearch(arr, start, middleIndex - 1, target)
    //     else return binarySearch(arr, middleIndex + 1, end, target)
    // }
/********************************************************************* */
//BINARY SEARCH PREP
//PARAMETERS
    //ARRAY, START INDEX, LAST INDEX, TARGET VALUE
//RETURN
    //TRUE IF VAL IS FOUND, FALSE OTHERWISE
//EXAMPLE
    //let arr = [1,2,3,4]
    //target val (4) returns true
    //target val (5) returns false
//PSEUDO
    //base condition if start > end (return false)
    //find middle index
    //check middleIndex against target (if equal return true)
    //return left side if middleIndex greater than target
    //return right side otherwise

//BINARY SEARCH FUNC
    // let arr = [1,2,3,4,5,6,7,8]
    // let start = 0
    // let end = length - 1
    // let target = 8

    // function binarySearch(arr,start,end,target){
    //     if(start > end) return false //put this in to keep from blowing the stack, this is the BASE CONDITION
    //     let middleIndex = Math.floor((start + end)/ 2)//finding middle index
    //     if(arr[middleIndex] === target) return true//checking middleIndex value against target
    //     if(arr[middleIndex] > target) return binarySearch(arr,start, middleIndex - 1, target)//return left half of array
    //     else return binarySearch(arr, middleIndex + 1, end, target)//return right half
    // }
    
/********************************************************************* */
//BINARY SEARCH
//PARAMS
    //ARRAY, START, END, TARGET
//RETURN 
    //TRUE OR FALSE
//EXAMPLE
    //let arr = [1,2,3,4]
    //target val (4) returns true
    //target val (5) returns false
//PSEUDO
    //base condition if start > end return false
    //find middleIndex
    //if middleIndex === target return true
    //if middleIndex > target return left side of array
    //else return right side of array

    // let arr = [1,2,3,4,5,6,7,8]
    // let start = 0
    // let end = arr.length - 1
    // let target = 8

    // function binarySearch(arr, start, end, target){
    //     if(start > end) return false
    //     let middleIndex = Math.floor(end / 2)
    //     if(arr[middleIndex] === target) return true
    //     if(arr[middleIndex] > target) return binarySearch(arr, start, middleIndex - 1, target)//middleIndex - 1 is new end val, returns left side of array
    //     else return binarySearch(start, middleIndex + 1, end, target)//right side 
    // }
    
/********************************************************************* */
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

    //const appendArrOfStr = arr => arr.map((v,i)=> `${i + 1}: ${v}`)
/********************************************************************* */
//MERGE SORT
    // function mergeSort(arr){
    //     if(arr.length < 2){
    //     return arr
    //     }
    //     const middleIndex = Math.floor(arr.length / 2)
    //     const leftHalf = arr.slice(0, middleIndex)
    //     const rightHalf = arr.slice(middleIndex, arr.length) //slice doesnt include last val so no need for -1
    //     return merge(mergeSort(leftHalf), mergeSort(rightHalf))
    // }

    // function merge(leftArr, rightArr){
    //     let resultArr = []
    //     let leftIndex = 0
    //     let rightIndex = 0

    //     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
    //         if(leftArr[leftIndex] < rightArr[rightIndex]){
    //             resultArr.push(leftArr[leftIndex])
    //             leftIndex +=1 
    //         }else{
    //             resultArr.push(rightArr[rightIndex])
    //             rightIndex += 1
    //         }
    //     }
    //     return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
    // }
/********************************************************************* */
    // const camelize = str => {
    //     return str
    //         .split('-')
    //         .map((word, index)=> index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    //         .join('')
    // }
    // console.log(camelize("background-color"))
/********************************************************************* */
    //const filterRange = (arr, a, b) => arr.filter(item => (a <= item && item <= b))
/********************************************************************* */
    // const filterRangeInPlace = (arr, a, b) => {
    //     for(let i = 0; i < arr.length; i++){
    //         let val = arr[i]

    //         if (val < a || val > b){
    //             arr.splice(i, 1)
    //             i--
    //         }
    //     }

    // }   
/********************************************************************* */
//sort array in decreasing order
    //const sortArrayDescending = arr => arr.sort((a, b)=> b - a)
/********************************************************************* */
//sort array in decreasing order without mutating original array
    //const sortArrayCopyDescending = arr => arr.slice().sort((a, b)=> b - a)
/********************************************************************* */
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

//SOLUTION
    // let names = users.map(item => item.name)//makes new array from name prop in each object
/********************************************************************* */
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// })))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
//console.log(usersMapped)
//alert( usersMapped[0].id ) // 1
//alert( usersMapped[0].fullName ) // John Smith
//So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

//SOLUTION
// let usersMapped = users.map((user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// })))
/********************************************************************* */
// // Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// // For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// //SOLUTION
// const sortByAge = arr => arr.sort((a, b) => a.age - b.age)

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete
/********************************************************************* */
// // Shuffle an array
// // importance: 3
// // Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// // Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// //SOLUTION (Fisher-Yates Shuffle)
// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){ //walk array in reverse
//         let j = Math.floor(Math.random() * (i + 1)); //random index from 0 to i
//         [array[i], array[j]] = [array[j], array[i]]; //swap array[i] and array[j] using destructuring assigment syntax
//     }
//     return array
// }

// console.log(shuffle(arr));
// // arr = [3, 2, 1]

// console.log(shuffle(arr));
// // arr = [2, 1, 3]

// console.log(shuffle(arr));
// // arr = [3, 1, 2]
// // // ...
// // All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
/********************************************************************* */
// // Get average age
// // importance: 4
// // Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// // The formula for the average is (age1 + age2 + ... + ageN) / N.

// // For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// //SOLUTION
// const getAverageAge = arr => arr.reduce((sum, user)=> +sum + user.age, 0) / arr.length 

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
/********************************************************************* */
// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O
/********************************************************************* */
//find the second minimum element of an array
    // let array = [1,7,3,4,8,9,7]
    // //PARAMS
    //     //ARRAY OF NUMS
    // //RETURN
    //     //2ND LOWEST VAL
    // //EXAMPLE
    //     //^^ 3
    // //PSEUDO
    //     //SORT THE ARRAY
    //     //RETURN INDEX 1
    // let sorted = array.sort((a,b)=> a - b)
    // console.log(sorted[1])
/********************************************************************* */
//merge two sorted arrays
    // let arr1 = [1,2,3,4,5,6]
    // let arr2 = [7,8,9,10,11]
    // let arr3 = [4,5,3,2,1,6]

    // function mergeTwo(arr1, arr2){
    //     let mergedArr = [...arr1, ...arr2]
    //     return mergedArr.sort((a, b)=> a - b)
    // }

    // console.log(mergeTwo(arr1, arr2))
    // console.log(mergeTwo(arr3, arr2))
/********************************************************************* */
//square every element of an array and combine into one sum
    // let arr = [1,2,3,4,5,6]
    // const squaresSum = arr => arr.reduce((sum, num)=> +sum + (num * num), 0)
    // console.log(squaresSum(arr))
/********************************************************************* */
    // let arr = [1,2,3,4,5,6,7]
    // arr.splice(0, 3, 'Lets', 'Dance')
    // console.log(arr)

/********************************************************************* */
//FOR A GIVEN LIST OF DIGITS 0 TO 9, RETURN A LIST WITH THE SAME DIGITS IN THE SAME ORDER, BUT WITH ALL 0S PAIRED
// Pairing two 0s generates one 0 at the location of the first one.
    //const pairZeros = (arr, f) = arr.filter(n => n || (f = !f))
/********************************************************************* */
//camelize string of words, first word remains lowercase!!!!
    // let str = 'weeeiin peein jeeein beeein'
    // const camelize = str => {
    //     return str
    //         .split(' ')
    //         .map((word, index)=> index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    //         .join('')
    // }
    // console.log(camelize(str))
/********************************************************************* */
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

//params
    //array
    //a val
    //b val
//return
    //new array with filtered vals
//ex
    // arr = [1,2,3,4,5,6,7] --> filterRange(arr, 3, 6) --> [3,4,5,6]
//pseudo
    //filter array
        //vals >= a && <= b
    //return it ^^^

//solution 
    // let arr = [1,2,3,4,5,6,7]
    // const filterRange = (arr, a, b) => arr.filter((item)=> item >= a && item <= b)
    // console.log(filterRange(arr, 3, 6))
    // console.log(arr)
/********************************************************************* */
//find nearest square num to provided num
    //const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)
/********************************************************************* */
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

//params
    //array of objects
//return 
    //array of users names (name key)
//example
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };

    // let names = [ John, Pete, Mary ];  
//pseudo
    //arr.map()
    //item.name
    // let john = { name: "John", age: 25 };
    // let pete = { name: "Pete", age: 30 };
    // let mary = { name: "Mary", age: 28 };

    // let users = [ john, pete, mary ];

    //const names = arr => arr.map((user)=> user.name)

    // console.log(names(users))
    // console.log(users)
/********************************************************************* */
//write a dang ol binary search, time complexity?
//O(log n)
    // function binarySearch(arr, start, end, target){
    //     if(start > end) return false
    //     let middleIndex = Math.floor(start + end) / 2
    //     if(middleIndex === target) return true
    //     if(middleIndex > target) return binarySearch(arr, start, middleIndex - 1, target)
    //     else return binarySearch(arr, middleIndex + 1, end, target)
    // }
/********************************************************************* */
//implement a function that add two nums together and returns their sum in binary
    //const binarySum = (a, b) => (a + b).toString(2) 
    //console.log(binarySum(1,2))
/********************************************************************* */
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

//params
    //string without space
//return 
    //string with space, even indexes on left, odd on right
//example
    // input: 'CodeWars'
    // output 'CdWr oeas'
//pseudo
    //split into array
    //filter evens
    //filter odds
    //join each new array
    //concat them

    // const evensOdds = str => {
    //     let evens = str
    //         .split('')
    //         .filter((char, i)=> i % 2 === 0)
    //         .join('')
    //     let odds = str
    //         .split('')
    //         .filter((char, i)=> i % 2 !== 0)
    //         .join('')
    //     return evens.concat(' ', odds)
    // }

    // console.log(evensOdds('CodeWars'))
/********************************************************************* */
//write a binary search, what is it's time complexity
//O(log n)
//params
    //array, start index, end index, target
//return
    //true or false
//ex
    //arr [1,2,3,4,5,6]
    //target = 3 --> true
    //target = 7 --> false
//pseudo
    //check start against end, must be smaller
    //set middleIndex val
    //if middleIndex === target return true
    //if mI > target return binarySearch left side of array
    //else return binarySearch right side of array

    // const binarySearch = (arr, start, end, target) => {
    //     if(start > end) return false
    //     let middleIndex = Math.floor((start + end) / 2)
    //     if(middleIndex === target) return true
    //     if(middleIndex > target) return binarySearch(arr, start, middleIndex -1, target)
    //     else return binarySearch(arr, middleIndex + 1, end, target)
    // }
/********************************************************************* */
//camelize string
    // let str = 'Im so fucking tired today'
    // const camelize = str => {
    //     return str
    //         .toLowerCase()
    //         .split(' ')
    //         .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
    //         .join('')
    // }
    // console.log(camelize(str))
/********************************************************************* */
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// // let names = /* ... your code */

// // alert( names ); // John, Pete, Mary

// //SOLUTION
// const names = arr => {
//     return arr.map(person => person.name)
// }
// console.log(names(users))
/********************************************************************* */
// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note:
// 0 is considered to be an even index.
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'
    // let str = 'CodeWars'
    // const oddEvens = str => {
    //     const evens = str.split('').filter((char, i) => i % 2 === 0).join('')
    //     const odds = str.split('').filter((char, i) => i % 2 !== 0).join('')
    //     return `${evens} ${odds}`
    // }
    // console.log(oddEvens(str))
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */
/********************************************************************* */