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
//constructor to create rpg toon
function Toon(name, characterClass, strength, speed, stamina, health){
    this.name = name
    this.characterClass = characterClass
    this.strength = strength
    this.speed = speed
    this.stamina = stamina
    this.health = health
    this.dexterity = Math.floor(speed/strength * 5)
    
    this.compareSpeed = function(toon) {
        switch(true){
            case this.speed > toon.speed: return [1, toon.name]
            case this.speed < toon.speed: return [0, toon.name]
            default: 
                return [-1, toon.name]
        }
    }

    this.compareStat = function(stat, toon){
        switch(true){
            case this[stat] > toon[stat]: return [1, toon.name]
            case this[stat] < toon[stat]: return [0, toon.name]
            default: 
                return [-1, toon.name]
        }
    }

    this.compareHealth = function(toon) {
        switch(true){
            case this.health > toon.health: return [1, toon.name]
            case this.health < toon.health: return [0, toon.name]
            default: 
                return [-1, toon.name]
        }
    }
    
    this.alertSpeedComparison = function(compareSpeed){
        switch(true){
            case compareSpeed[0] === 1: 
                console.log(`${this.name} is faster than ${compareSpeed[1]}`)
                break
            case compareSpeed[0] === 0:
                console.log(`${this.name} is slower than ${compareSpeed[1]}`)
                break
            default: 
                console.log(`${this.name} and ${compareSpeed[1]} are evenly matched!`)
                break
        }
    }

    this.alertHealthComparison = function(compareHealth){
        switch(true){
            case compareHealth[0] === 1: 
                console.log(`${this.name} has more health than ${compareHealth[1]}`)
                break
            case compareHealth[0] === 0:
                console.log(`${this.name} has less health than ${compareHealth[1]}`)
                break
            default: 
                console.log(`${this.name} and ${compareHealth[1]} are evenly matched!`)
                break
        }
    }
    
}

let userSelectedName = prompt('What is your toons name??')
let userSelectedClass = prompt('What is your toons class?')
let userSelectedStrength = Number(prompt('What is your toons strength (1-10)?'))
let userSelectedSpeed = prompt('What is your toons speed (1-10)?')
let userSelectedStamina = prompt('What is your toons stamina (1-10)?')
let userSelectedHealth = prompt('What is your toons health (1-10)?')

const jarble = new Toon(userSelectedName, userSelectedClass, userSelectedStrength, userSelectedSpeed, userSelectedStamina, userSelectedHealth)
const flargle = new Toon('flargle', 'warrior', 9, 7, 9, 5)

