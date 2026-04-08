# 13 --- Props vs Destructuring (Mini Tasks Pack)

### Vanilla JavaScript Only (No React)

In earlier units you worked with:

- Objects
- Functions
- DOM updates
- APIs

Now we introduce an important pattern you will see in modern JavaScript:

👉 Passing objects into functions (props-style thinking)\
👉 Destructuring values directly from those objects

Even though the word **props** is often used in React, the idea comes
from **plain JavaScript**.

---

## 1. The Core Idea

- **Props** = an object passed into a function
- **Destructuring** = pulling properties out of that object in the
  parameter list

This lesson uses ONLY vanilla JavaScript.

---

## 2. Why This Matters

You will use this pattern when:

- Building reusable UI generators
- Passing configuration objects
- Rendering cards from API data
- Structuring cleaner function logic
- Preparing for future frameworks (without needing them yet)

Think of it as **clean data passing** between pieces of code.

---

## 3. What Are "Props" in Vanilla JS?

Props simply mean:

A function receives an **object** as input.

Example:

```js
function createWelcomeMessage(props) {
  return "Welcome, " + props.name;
}
```

Calling it:

```js
createWelcomeMessage({ name: "Ana" });
```

Nothing special is happening --- this is just a function receiving an
object.

---

## 4. What is Destructuring?

Destructuring lets us pull values directly from an object.

Instead of:

```js
function createWelcomeMessage(props) {
  return "Welcome, " + props.name;
}
```

We can write:

```js
function createWelcomeMessage({ name }) {
  return "Welcome, " + name;
}
```

This means:

Take the property called `name` from the object passed in, and create a
variable called `name` automatically.

Cleaner and easier to read.

---

## 5. Understanding the Symbols

    { name } → object destructuring
    props → just a normal object parameter
    () → function parameters
    => → arrow function syntax (optional style)

Destructuring does NOT change the data --- it only changes how we access
it.

---

## 6. Props vs Destructuring --- Side-by-Side

WITHOUT destructuring:

```js
function showUser(props) {
  console.log(props.name);
}
```

WITH destructuring:

```js
function showUser({ name }) {
  console.log(name);
}
```

Both work the same --- destructuring is just cleaner.

---

## 7. Practice Tasks Overview

You will build small vanilla JS utilities that:

1.  Receive objects as arguments
2.  Extract properties using destructuring
3.  Return strings or small HTML pieces
4.  Practice reading nested values

Example mini tasks:

- Greeting message generator
- Profile card creator
- Product price label
- Playlist item renderer

All logic stays in JavaScript --- no frameworks involved.

---

## 8. Mini Homework --- "Simple Card Generator"

Goal:

Create a function that builds a text-based card using destructuring.

Example data:

```js
const user = {
  name: "Ana",
  country: "Mexico",
  hobby: "Coding",
};
```

Steps:

1.  Write a function that receives the object.
2.  Destructure `name`, `country`, and `hobby` in the parameters.
3.  Return a formatted string like:

```{=html}
<!-- -->
```

    --- PROFILE ---
    Name: Ana
    Country: Mexico
    Hobby: Coding

Optional challenge:

Add a nested object and practice deeper destructuring.

---

## 9. Final Mindset

Props are not a framework feature.

They are simply:

👉 Passing objects into functions.

Destructuring helps you:

- Write cleaner code
- Avoid repetitive `object.property` usage
- Prepare for modern JavaScript patterns

If you understand:

- Objects
- Function parameters
- `{ property }` syntax

You already understand props-style thinking in vanilla JavaScript.
