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
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
