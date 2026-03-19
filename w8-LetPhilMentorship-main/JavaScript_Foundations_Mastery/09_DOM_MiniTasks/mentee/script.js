// 08 – DOM MINI TASKS
// ----------------------------------------------

// After writing code, refresh index.html in the browser
// to see the visual changes.
//
// ==============================================
// TASK 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select the element with id "mainTitle" and store it
//         in a variable (for example, mainTitleEl).
//
// STEP 2: Select the element with id "description" and store it
//         in a variable.
//
// STEP 3: Select the element with id "itemList" and store it
//         in a variable.
//
// STEP 4: (Optional) Use console.log to log these variables and
//         check they are not null.

const mainTitleEl = document.getElementById("mainTitle");
const descriptionEl = document.getElementById("description");
const itemListEl = document.getElementByID("itemList");
const mainCardEl = document.getElementById("mainCard");
console.log(mainTitleEl);
console.log(descriptionEl);
console.log(itemListEl);

// ==============================================
// TASK 2 – UPDATE TEXTCONTENT
// ==============================================
//
// STEP 5: Change the textContent of mainTitle to something new,
//         like "DOM Practice – Updated by JS".
//
// STEP 6: Change the textContent of description to a sentence
//         that explains this card was updated using JavaScript.

mainTitleEl.textContent = "DOM Practice – Updated by JS";
descriptionEl.textContent = "This card was updated using JavaScript.";

// ==============================================

// TASK 3 – UPDATE STYLES / CLASSES
// ==============================================
//
// STEP 7: Change the text color of mainTitle using .style.color.
//
// STEP 8: Change the background color of the card (id "mainCard")
//         using .style.backgroundColor. rgba(255, 255, 255, 0.06);
//
// STEP 9: Add the class "highlight-card" to the main card using
//         element.classList.add("highlight-card").

mainTitleEl.style.color = "blue";
mainCardEl.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
mainCardEl.classList.add("highlight-card");

// ==============================================
// TASK 4 – CREATE AND REMOVE ELEMENTS
// ==============================================
//
// STEP 10: Use document.createElement("li") to make a new list item.
//
// STEP 11: Set the textContent of the new list item to something like
//          "New item from JS".
//
// STEP 12: Append this new list item to itemList using appendChild.
//
// STEP 13: Select one of the existing list items (for example,
//          the first item) and remove it using .remove().

const newListItemEl = document.createElement("li");
newListItemEl.textContent = "Item 4";
itemListEl.appendChild(newListItemEl);
newListItemEl.classList.add("item");