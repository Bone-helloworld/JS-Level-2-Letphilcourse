// ARRAYS & OBJECTS BASICS —
// -----------------------------------------

// -------- TASK 1 — CREATE A SIMPLE ARRAY --------

// STEP 1: Create an array called favoriteFruits with at least 3 fruits.
// STEP 2: Log the entire array.
// STEP 3: Log the first and second items using indexes.

let favoriteFruits = ["apple", "banana", "orange"];
console.log(favoriteFruits);
console.log(favoriteFruits[0]);
console.log(favoriteFruits[1]);

// -------- TASK 2 — MODIFY AN ARRAY --------

// STEP 4: Add a new fruit to the array (basic: favoriteFruits[3] = "...").
// STEP 5: Update one existing fruit (change its value).
// STEP 6: "Remove" a fruit by setting it to null or an empty string.
// STEP 7: Log the updated array.
favoriteFruits[3] = "grape";
favoriteFruits[0] = "blueberry";
favoriteFruits[1] = null;
console.log(favoriteFruits);


// -------- TASK 3 — CREATE A SIMPLE OBJECT --------

// STEP 8: Create an object called student with:
//         name, age, isEnrolled (boolean)
// STEP 9: Log the object.
// STEP 10: Log individual properties (student.name, student.age)

let students = [
  {
    name: "Joyce",
    age: 33,
    isEnrolled: true,
  },

  {
    name: "Hanna",
    age: 22,
    isEnrolled: false,
  },
];


console.log(students[1]);
console.log(students);
console.log(students[0].name);
console.log(students[0].age);

// -------- TASK 4 — MODIFY OBJECT PROPERTIES --------

// STEP 11: Update the student's age.
// STEP 12: Add a new property called favoriteColor.
// STEP 13: Log the updated object.


students[1].age = 20;
students[1].favoriteColor = "pink";
console.log(students[1]);