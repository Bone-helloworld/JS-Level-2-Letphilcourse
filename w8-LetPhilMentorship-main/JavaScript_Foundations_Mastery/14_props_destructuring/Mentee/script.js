// 13 – PROPS vs DESTRUCTURING (MINI TASKS)
// ----------------------------------------------
//
// GOAL:
// - Understand "props" in vanilla JS (object passed into a function)
// - Understand destructuring (pulling properties out of that object)
//
// ✅ Reminder:
// "Props" here means: "an object we pass into a function"
// (This is a vanilla JavaScript pattern that React also uses.)
//
// ==============================================
// STEP 1 – SELECT ELEMENTS
// ==============================================
//
// STEP 1: Select and store the following elements in variables using getElementById:
//         - propsTask1Btn (id "propsTask1Btn")
//         - propsTask1Display (id "propsTask1Display")
//         - propsTask2Btn (id "propsTask2Btn")
//         - propsTask2Display (id "propsTask2Display")
//         - destructTask1Btn (id "destructTask1Btn")
//         - destructTask1Display (id "destructTask1Display")
//         - destructTask2Btn (id "destructTask2Btn")
//         - destructTask2Container (id "destructTask2Container")
//         - statusText (id "statusText")

const propsTask1Btn = document.getElementById("propsTask1Btn");
const propsTask1Display = document.getElementById("propsTask1Display");
const propsTask2Btn = document.getElementById("propsTask2Btn");
const propsTask2Display = document.getElementById("propsTask2Display");
const destructTask1Btn = document.getElementById("destructTask1Btn");
const destructTask1Display = document.getElementById("destructTask1Display");
const destructTask2Btn = document.getElementById("destructTask2Btn");
const destructTask2Container = document.getElementById("destructTask2Container");
const statusText = document.getElementById("statusText");
//
// CHECKPOINT:
// - Make sure none of your variables are null.
// - If a variable is null, the id in HTML does not match.

//
// ==============================================
// STEP 2 – PROPS MINI TASK 1 (WELCOME MESSAGE)
// ==============================================
//
// GOAL:
// Learn what "props" means WITHOUT destructuring first.
//
// STEP 2: Create a function named createWelcomeMessageProps that:
//         - receives ONE parameter named props (an object)
//         - expects props to have a key named "text"
//         - returns: "Welcome, " + props.text
//
// STEP 3: Add a "click" event listener to propsTask1Btn.
//         Inside the listener:
//         - create an object like:
//             const messageProps = { text: "LetPhil mentee! 🎉" };
//         - (Optional) console.log(messageProps) to see the object.
//         - call createWelcomeMessageProps(messageProps) and store the result.
//         - set propsTask1Display.textContent to the returned string.
//
// CHECKPOINT:
// - If you see "Welcome, undefined", your object key is wrong.
//   The function expects a key named "text".

function createWelcomeMessageProps(props) {
  return "Welcome, " + props.text
}
propsTask1Btn.addEventListener("click" , () => {
  const messageProps = { text: "Wave 8 Mentee!"};
  console.log(messageProps);

  const result = createWelcomeMessageProps(messageProps);
  propsTask1Display.textContent = result;
});
//
// ==============================================
// STEP 3 – PROPS MINI TASK 2 (USER SUMMARY)
// ==============================================
//
// GOAL:
// Practice "props" again with MORE THAN ONE property.
//
// STEP 4: Create a function named createUserSummaryProps that:
//         - receives ONE parameter named props (an object)
//         - expects props to have keys:
//             * name
//             * age
//         - returns a string like:
//             "User: " + props.name + " (Age: " + props.age + ")"
//
// STEP 5: Add a "click" event listener to propsTask2Btn.
//         Inside the listener:
//         - create an object like:
//             const userProps = { name: "Ana", age: 22 };
//         - call createUserSummaryProps(userProps) and store the result.
//         - set propsTask2Display.textContent to the returned string.
//
// CHECKPOINT:
// - If name or age shows as undefined, your object keys do not match.

function createUserSummaryProps(props) {
  return `User: ${props.name}, (Age: ${props.age})`;
}
propsTask2Btn.addEventListener("click", () => {
  const userProps = { name: "Ana", age: 22 };
  const result = createUserSummaryProps(userProps);
  propsTask2Display.textContent = result;
});
//
// ==============================================
// STEP 4 – DESTRUCTURING MINI TASK 1 (WELCOME MESSAGE)
// ==============================================
//
// GOAL:
// See how destructuring changes ONLY how we RECEIVE the object.
//
// STEP 6: Create a function named createWelcomeMessageDestructured that:
//         - uses object destructuring in the parameter list:
//             function createWelcomeMessageDestructured({ text }) { ... }
//         - returns: "Welcome, " + text
//
// STEP 7: Add a "click" event listener to destructTask1Btn.
//         Inside the listener:
//         - create the SAME type of object as before:
//             const messageProps = { text: "Destructuring unlocked ✅" };
//         - call createWelcomeMessageDestructured(messageProps).
//         - set destructTask1Display.textContent to the returned string.
//
// IMPORTANT DETAILS:
// - The object you pass in MUST still have a key named "text".
// - Destructuring does not change the object — it changes how we read it.
//

function createWelcomeMessageDestructured ({ text }) {
  return "Welcome, " + text;
}
destructTask1Btn.addEventListener("click" , () =>{
  const messageProps = { text: "Destructuring unlocked ✅" };
  destructTask1Display.textContent = createWelcomeMessageDestructured(messageProps)
})
// ==============================================
// STEP 5 – DESTRUCTURING MINI TASK 2 (PRODUCT CARD)
// ==============================================
//
// GOAL:
// Destructure multiple properties and build a small HTML card.
//
// STEP 8: Create a function named createProductCard that:
//         - destructures in the parameter list:
//             function createProductCard({ title, price, stock }) { ... }
//         - formats price with 2 decimals:
//             const priceText = "$" + price.toFixed(2);
//         - decides stock message:
//             - if stock === 0 → "Out of stock"
//             - else → "In stock: X"
//         - decides a class name for stock text:
//             - "out" for out of stock
//             - "in" for in stock
//         - returns an HTML template string, for example:
//
//             `
//               <article class="product-card">
//                 <h3 class="product-title">${title}</h3>
//                 <p class="product-price">${priceText}</p>
//                 <p class="product-stock ${stockClass}">${stockMessage}</p>
//               </article>
//             `
function createProductCard({ title, price, stock }) {
  const priceText = "$" + price.toFixed(2);
  let stockMessage;
  let stockClass;
  if (stock === 0) {
    stockMessage = "Out of stock";
    stockClass = "Out";
  } else {
    stockMessage = "In stock " + stock;
    stockClass = "in";
  }
  return `
  <article class="product-card">
  <h3 class="product-title">${title}</h3>
  <p class="product-price">${priceText}</p>
  <p class="product-stock ${stockClass}">${stockMessage}</p>
  </article>`
}
// STEP 9: Add a "click" event listener to destructTask2Btn.
//         Inside the listener:
//         - create ONE product object like:
//             const product = { title: "Wireless Headphones", price: 59.99, stock: 12 };
//         - call createProductCard(product) to get the HTML string.
//         - set destructTask2Container.innerHTML to that HTML string.
//         - set statusText.textContent to something like:
//             "Card rendered using destructuring ✅"
//
// CHECKPOINTS:
// - If values show as undefined, your object keys do not match.
// - If the card doesn’t show, console.log the HTML string before rendering.

destructTask2Btn.addEventListener("click", () => {
  const product = { title: "Wireless Headphones", price: 59.99, stock: 12 };
  const cardHTML = createProductCard(product);
  destructTask2Container.innerHTML = cardHTML;
  statusText.textContent = "Card rendered using destructuring ✅";
})