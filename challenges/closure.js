// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Because an outer function (in this case: myFunction) serves as a temporary environment for a function enclosed within it (in this case: nestedFunction),
// and functions can look to the environments in which they are enclosed, if they are asked to use a variable (in this case: const internal) that is not defined
// in their internal function definition.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param){
  let count = 0;
  return function counter() {
    for (let i = param; i >= 0; i--){
      count += i;
    }
    return count;
  }
}
let sum = summation(4);
console.log(sum());