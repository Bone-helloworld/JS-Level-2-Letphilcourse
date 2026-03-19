// 08 – FUNCTIONS (Homework)
// ----------------------------------------------

// Homework focus:
// - practice writing small functions
// - practice parameters + return
// - practice arrow functions
// - practice callbacks (just a little)
//
// ==============================================
// TASK 1 – “MAKE A MACHINE” (RETURN A VALUE)
// ==============================================
//
// STEP 1: Create a function named doubleNumber.
//         It takes ONE parameter: n
//         It returns n * 2
//
// STEP 2: Test it 3 times with console.log.
//         Use labels so it’s clear.
function doubleNumber (n) {
    return n*2;
};
const nums = [2,5,10];
nums.forEach((num)=> {
    console.log(`Double = ${doubleNumber(num)}`);
});
// ==============================================
// TASK 2 – “GUARDRAIL” (IF / ELSE INSIDE A FUNCTION)
// ==============================================
//
// STEP 3: Create a function named canWatchMovie.
//         It takes ONE parameter: age
//
// STEP 4: Inside the function:
//         - If age is 13 or higher, return "Allowed ✅"
//         - Else, return "Not allowed ❌"
//
// STEP 5: Test it with ages like 10, 13, 17.
function canWatchMovie (age) {
    if (age >=13) {
        return "Allowed ✅";
    } else {
        return "Not allowed ❌";
    }
    }
const ages = [10,18,7];
ages.forEach((age) => {
    console.log(`${age}: ${canWatchMovie(age)}`)
});
// ==============================================
// TASK 3 – DEFAULT PARAMETER (OPTIONAL INPUT)
// ==============================================
//
//  Sometimes you want a “backup value” if the user didn’t pass anything.
//
// STEP 6: Create a function named greet.
//         It takes ONE parameter: name
//         If no name is provided, it should default to "friend"
//
// STEP 7: Return a string like: "Hello, <name>!"
//
// STEP 8: Test greet() with:
//         - greet("Maya")
//         - greet()   (no argument)
function greet (name) {
    if (name === undefined) {
        name = "friend";
    } else {
    return `Hello, ${name}!`;
    }
}
console.log(greet("Maya"));
console.log(greet());
// ==============================================
// TASK 4 – ARROW FUNCTION PRACTICE
// ==============================================
//
// STEP 9: Create an arrow function named subtract.
//         It takes two parameters: a and b
//         It returns a - b
//
// STEP 10: console.log subtract with a few tests.
const subtract = (a,b) => {
    return a-b;
};
const sub = [[10,5], [20, 8], [100, 50]];
sub.forEach((pair) => {
    console.log(`${subtract(pair[0], pair[1], pair[2])}`);
});
// ==============================================
// TASK 5 – CALLBACK MINI (FUNCTION AS AN ARGUMENT)
// ==============================================
//
// STEP 11: Create a function named doMath.
//          It takes THREE parameters:
//          - numberA
//          - numberB
//          - operation (this will be a FUNCTION)
//
// STEP 12: Inside doMath:
//          return operation(numberA, numberB)
//
// STEP 13: Call doMath twice:
//          - once with an add operation
//          - once with a multiply operation
//
//  Hint: You can pass arrow functions like:
// (x, y) => x + y
function doMath (numberA, numberB, operation) {
    return operation(numberA, numberB);
}
console.log(doMath(10,5, (x,y) => x+y));
console.log(doMath(10,5, (x,y) => x*y));
// ==============================================
// TASK 6 – “REAL LIFE” MINI: TAX CALCULATOR
// ==============================================
//
// STEP 14: Create a function named addTax.
//          It takes two parameters:
//          - price
//          - taxRatePercent  (example: 16 for 16%)
//
// STEP 15: Convert the taxRatePercent into a decimal rate.
//          Example: 16% becomes 0.16
//
// STEP 16: Return the final price WITH tax included.
//
// STEP 17: Test with console.log:
//          addTax(100, 16)
//          addTax(59.99, 8)
const addTax = (price, taxRatePercent) => {
    const taxRate = taxRatePercent / 100;
    return price + (price * taxRate);
};
console.log(addTax(100,16));
console.log(addTax(59.99,8));