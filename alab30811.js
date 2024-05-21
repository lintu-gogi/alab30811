// The initial numbers that must be verified.
const n1 = 15;
const n2 = 10;
const n3 = 20;
const n4 = 5;
let isDivisibleBy5;
let compareNum1AndNum2;
let reminder;
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;
// Finally, log the results.
if(isValid){
console.log(`The four numbers meet all the criteria and therefore : ${isValid}`);
}
else{
    console.log(`The four numbers doesn't meet all the criteria and therefore : ${isValid}`);
}
isDivisibleBy5= (n1 % 5)+(n2 % 5)+(n3 % 5)+(n4 % 5)

if(isDivisibleBy5>0)
{
    console.log('The all four numbers is not divisible by 5');
}
else{
    console.log('The all four numbers is divisible by 5');
}
compareNum1AndNum2 = n1>n2;
if(compareNum1AndNum2)
console.log("First number is larger than the Second number ");
else
console.log("First number is smaller than the Second number ");
reminder=((n2-n1)*n3)%n4;
console.log(`The reminder after the arithmetic operations : ${reminder}`);
// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
/*const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);*/

  /////Part 2
  console.log("Second Part");
  const distance=1500;
  const costPerGallon=3;

  const budget=175;
  //let totalExpense;
  //Conditions for 55 miles/hour
  let at55pergallon=distance/30;
  let timeForTheTrip = distance/55;
  console.log("Total Gallons of fuel needed for the trip at 55 per hour: "+at55pergallon);
  let totalExpense55=at55pergallon*costPerGallon;
  console.log("Total expense of the trip = "+totalExpense55);
  if(totalExpense55<budget){
    console.log("Trip is under budget");
  }
  else{
    console.log("Trip is over budget");
  }
  console.log("Total time for the trip in hours= "+timeForTheTrip);
  //Conditions for 60 miles/hour
  let at60pergallon=distance/28;
  let timeForTheTrip60 = distance/60;
  console.log("Total Gallons of fuel needed for the trip at 60 per hour: "+at60pergallon);
  let totalExpense60=at60pergallon*costPerGallon;
  console.log("Total expense of the trip = "+totalExpense60);
  if(totalExpense60<budget){
    console.log("Trip is under budget");
  }
  else{
    console.log("Trip is over budget");
  }
  console.log("Total time for the trip in hours= "+timeForTheTrip60);
  //Conditions for 70 miles/hour
  let at70pergallon=distance/23;
  let timeForTheTrip70 = distance/70;
  console.log("Total Gallons of fuel needed for the trip at 70 per hour: "+at70pergallon);
  let totalExpense70=at70pergallon*costPerGallon;
  console.log("Total expense of the trip = "+totalExpense70);
  if(totalExpense70<budget){
    console.log("Trip is under budget");
  }
  else{
    console.log("Trip is over budget");
  }
  console.log("Total time for the trip in hours= "+timeForTheTrip70);
  let expenseComparison;
  if(totalExpense55>totalExpense60 && totalExpense55>totalExpense70)
    {
        console.log("55 miles per hour has the most expense");
    }
    else if(totalExpense60>totalExpense55 && totalExpense60>totalExpense70)
    {
        console.log("60 miles per hour has the most expense");
    }
    else{
        console.log("70 miles per hour has the most expense");
    }
  