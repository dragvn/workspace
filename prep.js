//PREP
//FIZZBUZZ
//Take in a num, print 1 to num
//if num is div by 3 print fizz, if by 5 print buzz, 3 & 5 print fizzbuzz

//P: num, whole, + always
//R: console log each num
//E:

function fizzBuzz(num){
    //loop (start at 1)
    for(i=1;i <= num;i++){
        //conditionals %3&5, %3, %5
        if(i % 15 === 0){
            console.log('fizzBuzz')
        }else if(i % 5 === 0){
            console.log('buzz')
        }else if(i % 3 == 0){
            console.log('fizz')
        }else{
            console.log(i)
        }
    }
    
    //console.log num or fizz, buzz, fizzBuzz

}

fizzBuzz(5)//1,2,fizz,4,buzz
fizzBuzz(3)//1,2,fizz
fizzBuzz(15)//1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz 