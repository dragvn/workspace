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

/************************************************************ */
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

/*********************************************************** */