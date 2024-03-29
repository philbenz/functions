console.log('sanity check!');


// Define a function called sum that takes two numbers as
//  arguments and returns their sum.
console.log("//// Print Sum ////");
function sum(num1, num2) {
  return num1 + num2;
}

var resultSum = sum(1,2);
console.log(resultSum === 3);
console.log(resultSum === 2);

console.log('///////////');

/* Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.  */

console.log("//// Is Equal ////");
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

/*Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less than 0 percent.*/

console.log("//// Discount Percentage ////");

function discountPercentage(originalAmount, percentOff) {

  //UPDATE: ensure only 99% can be taken off - this is for simplicity.
  var trimmedPercent = percentOff.toFixed(2);

  if(percentOff<=0 || trimmedPercent>.99){
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
//UPDATE:  I added this function to both reuse what i had put in earlier and to adjust strings into arrays.

function separateText(new_string) {
  var array = new_string.split(' ');
  var new_Cap = "";
  var new_String = new Array ();

  for(var i = 0; i < array.length; i++) {
    new_Cap = stringCapitalize(array[i]);
    new_String.push(new_Cap);
  }
    return new_String.join(" ");
}


console.log("1: " + separateText("first"));
console.log(separateText("here is text"));
console.log(separateText("three letter acronym"));
console.log(separateText(" space before word"));

console.log("////////evenNumbers////////")
//Created function to help with #5 and #7
function getRandomInteger_zero_100() {
  return (Math.floor((Math.random()*100)+1));
}

function evenNumbers(arbitrary_integer) {
   console.log("Random Integer: "+ arbitrary_integer);
   var end = "complete";
   // for the change, I set 'i' to the arbitrary integer
   for(i=0; i<arbitrary_integer+1; i++){
      if(i%2===0){
        //UPDATE: changed to print the even numbers rather than code.
        console.log(i);
      }
   }
  return end;
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

//confused as '0' is neither odd nor even
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
