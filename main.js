console.log('sanity check!');


// Define a function called sum that takes two numbers as
//  arguments and returns their sum.

function sum(num1, num2) {
  return num1, num2;
}

var resultSum = sum(1,2);
console.log(resultSum === 3);
console.log(resultSum === 2);

console.log('///////////');

/* Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.  */

function isEqual(arg1, arg2){

  if(arg1===arg2) {
    return true;
  } else {
    return false;
  }

}

console.log(isEqual(1, 1));
console.log(isEqual(1, 2));
console.log(isEqual(1, '1'));
console.log(isEqual('one', 'One'));

/*Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.*/

function discountPercentage(originalAmount, percentOff) {

  if(percentOff<0 || percentOff>.99){
    console.log("Warning - program stopped")
  } else {
    return(originalAmount*percentOff);
  }
}

console.log(discountPercentage(100, .10));
console.log(discountPercentage(100, 1.00));
console.log(discountPercentage(100, 0));
console.log(discountPercentage(100, -.1));
console.log(discountPercentage(100, .50));

console.log("//////STRING CAPITALIZE///////");
//to be honest, I really struggled here on capitalizing.  I ended up some smelly for loops so I googled the below to see how that worked.  I'm trying to think more like 'this' kind of programming than verbose looping.  Truly difficult.
function stringCapitalize(new_word) {
    return new_word.charAt(0).toUpperCase() + new_word.slice(1);
}

console.log("1: " + stringCapitalize("first"));
console.log(stringCapitalize("here's text"));
console.log(stringCapitalize("three letter acronym"));
console.log(stringCapitalize(" space before word"));

console.log("////////evenNumbers////////")
//Created function to help with #5 and #7
function getRandomInteger_zero_100() {
  return (Math.floor((Math.random()*100)+1));
}

function evenNumbers(arbitrary_integer) {
   console.log("Random Integer: "+ arbitrary_integer);
   var sum = 0;

   for(i=0; i<arbitrary_integer+1; i++){
      if(i%2===0){
        sum = sum + i;
      }
   }
  return sum;
}

console.log("Sum is: " + evenNumbers(getRandomInteger_zero_100()));


console.log("////////isDivisible///////");
//Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisible(dividend, divisor) {
  if(dividend%divisor === 0) {
    return true;
  } else {return false;}
}

console.log(isDivisible(100, 10)); //true
console.log(isDivisible(100, 9));  //false
console.log(isDivisible(17, 1));   //true
console.log(isDivisible(5, 2));    //false

console.log("///BONUS ROUND ~ oddNumbers////")

function isOdd(number){
   return number%2;
}


function oddNumber(randomInteger) {
  console.log("Random integer is " + randomInteger);
  if(randomInteger>=40) {
    for(i=40; i<randomInteger+1; i++){
      if(isOdd(i)){
        console.log(i);
      }
    }
    } else {
      for(i=0; i<=randomInteger; i++){
        if(isOdd(i)) {
          console.log(i);
        }
      }
    }
  }

oddNumber(getRandomInteger_zero_100());
