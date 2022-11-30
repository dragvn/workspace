/***********************
SORT ARRAY IN ASCENDING ORDER NUMERICALLY 
**********************/

    function sortArrayAscending(array){
        let sortedArray = array.sort((a,b)=> a-b)
        console.log(sortedArray)
    }
    sortArrayAscending([34,12,90])