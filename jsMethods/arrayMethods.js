//Coding along to 8 Must Know JS Array Methods

//ARRAY OF OBJECTS TO CALL MY METHODS ON
const items = [
    {name: 'Bike', price: 100},
    {name: 'TV' , price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25},
]

//FILTER()
    //FILTER OUT EVERYTHING UNDER $100
    const under100 = items.filter((item)=> item.price <= 100)
    console.log(under100)

    //FUNCTION TO FILTER BY ANY PRICE
    const filterByPrice = (arr, price) => arr.filter((item)=> item.price <= price)
    console.log(filterByPrice(items, 100))
    console.log(filterByPrice(items, 200))

//MAP() -- CONVERT ARRAY TO NEW ARRAY BY MAPPING OVER IT
    //MAKE NEW ARRAY OF ITEM NAMES
    const itemNames = items.map((item)=> item.name)
    console.log(itemNames)

//FIND() -- RETURNS FIRST OCCURENCE 
    //RETURN ITEM WITH NAME 'BOOK'
    const foundItem = items.find((item)=> item.name === 'Book')
    console.log(foundItem)

    //FUNCTION TO SEARCH BY NAME
    const findByName = (array, name) => array.find((item)=> item.name === name)
    console.log(findByName(items, 'Computer'))
    console.log(findByName(items, 'Keyboard'))
    console.log(findByName(items, 'Desk'))
//FOREACH() -- ITERATE OVER EVERY ELEMENT OF ARRAY AND MODIFY IT OR RETURN IT
    //PRINT EVERY ITEM IN THE ARRAY
    items.forEach((item)=> console.log(item))

    //INCREASE PRICE OF EVERY ITEM IN THE ARRAY BY 5
    items.forEach((item)=> item.price + 5)
    console.log(items)
  
//SOME() -- RETURNS TRUE AS SOON AS CONDITION IS MET
    //DOES THE ARRAY CONTAIN ITEMS LESS THAN $100?
    console.log(items.some((item)=> item.price <= 100))

    //FUNCTION TO CHECK FOR ITEMS BASE ON MAX PRICE
    const itemsUnderMaxPrice = (arr, price) => arr.some((items)=> items.price <= price)
    console.log(itemsUnderMaxPrice(items, 100))

    //CHECK IF THERE IS A COMPUTER IN THE ARRAY OF ITEMS
    const hasComputer = items.some((item)=> item.name === 'Computer')
    console.log(hasComputer)

//EVERY() -- CHECKS TO SEE IF EVERY ITEM MEETS CONDITION
    const allComputers = items.every((item)=> item.name === 'Computer')
    console.log(allComputers)

//REDUCE() -- USEFUL FOR SUMMING ARRAYS OF INT VALS
    //GIVE TOTAL PRICE OF ITEMS IN ARRAY
    const totalPrice = items.reduce((sum, cur)=> +sum + +cur.price, 0)
    console.log(totalPrice)
