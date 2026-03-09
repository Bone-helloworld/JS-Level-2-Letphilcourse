// 05 – LOOPS
// ----------------------------------------------

// ==============================================
// TASK 1 – COUNT UP WITH A FOR LOOP
// ==============================================

// STEP 1: Write a for loop that counts from 1 up to 10.
//         In the loop body, console.log the current number on each step.

// STEP 2: Add a label to your log so it is clear in the console,
//         for example: "Counting up: 1", "Counting up: 2", etc.

for (let i=1; i <=10; i++) {
  console.log(`Counting up: ${i}`);
}

// ==============================================
// TASK 2 – SUM OF NUMBERS
// ==============================================

// STEP 3: Create a variable called maxNumber and give it a small number,
//         like 5 or 10.

// STEP 4: Create a variable called total and start it at 0.

// STEP 5: Write a for loop that starts at 1 and goes up to maxNumber.
//         On each loop, add the current number to total.
//         (This is like total = total + currentNumber.)

// STEP 6: After the loop ends, console.log a message that shows
//         the final total, for example:
//         "Sum of numbers from 1 to (maxNumber) is (total)".

let maxNumber = 5;
let total = 0;

for (let i=1; i<=maxNumber; i++) {
  total = total + i;
}
console.log(`Sum of numbers from 1 to ${maxNumber} is ${total}`);

// ==============================================
// TASK 3 – COUNT DOWN
// ==============================================

// STEP 7: Write a for loop that counts down from 5 to 1.
//         Hint: start at 5, and decrease the counter each time.

// STEP 8: On each step, console.log a message like:
//         "Countdown: 5", "Countdown: 4", etc.

for (let i=5; i>=1; i--) {
  console.log(`Countdown: ${i}`);
}

// ==============================================
// TASK 4 – LOOP OVER AN ARRAY
// ==============================================

// STEP 9: Create an array called favoriteSnacks (or favoriteSongs)
//         with at least 3 string items.

// STEP 10: Write a for loop that goes through the array
//          from the first item to the last item.

// STEP 11: Inside the loop, console.log each item with its index,
//          for example:
//          "Snack 0: Chips"
//          "Snack 1: Chocolate"
//          etc.

let favoriteSongs = ["Song A", "Song B", "Song C"];

for (let i=0; i<favoriteSongs.length; i++){
  console.log(`Song ${i}: ${favoriteSongs[i]}`);
}

// ==============================================
// TASK 5 – BASIC WHILE LOOP COUNT UP
// ==============================================

// STEP 12: Create a variable called number and set it to 1.

// STEP 13: Write a while loop that runs while number is less than or equal to 5.

// STEP 14: Inside the loop, console.log a message like:
//          "While counting up: 1", "While counting up: 2", etc.

// STEP 15: VERY IMPORTANT — inside the loop, increase number by 1
//          so the loop eventually stops.
//          (Hint: number = number + 1;)

let number = 1;

while (number <=5){
  console.log(`While counting up: ${number}`);
  number +=1;
}
// ==============================================
// TASK 6 – COUNT DOWN WITH WHILE
// ==============================================

// STEP 16: Create a variable called countdown and set it to 5.

// STEP 17: Write a while loop that runs while countdown is greater than 0.

// STEP 18: Inside the loop, console.log:
//          "While countdown: 5", "While countdown: 4", etc.

// STEP 19: Decrease countdown by 1 inside the loop
//          so the loop eventually stops.
 let countdown = 5;

 while(countdown >0){
  console.log(`While countdown: ${countdown}`);
  countdown -=1;
 }

// ==============================================
// TASK 7 – SUM USING A WHILE LOOP
// ==============================================

// STEP 20: Create a variable called limit and set it to 5.

// STEP 21: Create a variable called current and set it to 1.

// STEP 22: Create a variable called sum and start it at 0.

// STEP 23: Write a while loop that runs while current is less than or equal to limit.

// STEP 24: Inside the loop:
//          - Add current to sum
//          - Increase current by 1

// STEP 25: After the loop ends, console.log:
//          "While loop sum from 1 to (limit) is (sum)".

let limit =5;
let current =1;
let sum =0;

while (current <= limit) {
  sum += current;
  current +=1;
}
console.log(`While loop sum from 1 to ${limit} is ${sum}`);

// ==============================================
// TASK 8 – LOOP THROUGH AN ARRAY WITH WHILE
// ==============================================

// STEP 26: Create an array called dailyTasks with at least 3 items.

// STEP 27: Create a variable called index and set it to 0.

// STEP 28: Write a while loop that runs while index is less than
//          the length of the dailyTasks array.

// STEP 29: Inside the loop, console.log each task like:
//          "Task 0: Study"
//          "Task 1: Workout"
//          etc.

// STEP 30: Increase index by 1 inside the loop.

let dailyTasks = ["Sleep","Wake up","Coding"];
let index = 0;

while (index < dailyTasks.length){
  console.log(`Task ${index}: ${dailyTasks[index]}`);
  index ++;
}