# 08 -- DOM Mini Tasks (Selectors, textContent, style, create/remove)

In previous lessons you worked mostly in the **console**.

Now your JavaScript will begin to affect the **actual page**.

This unit focuses ONLY on basic DOM wiring:

- Selecting elements
- Reading and changing `textContent`
- Updating simple styles or classes
- Creating and removing elements

No events yet.\
No localStorage.\
No APIs.

We keep the scope small so the DOM feels safe and clear.

---

## 1. What is the DOM?

The **DOM (Document Object Model)** is how the browser represents your
HTML as a tree of JavaScript objects.

Think of it like a family tree 🌳:

- Each HTML element is a node.
- JavaScript can find nodes, read them, and change them.

Example:

```html
<h1 id="title">Hello</h1>
```

```js
const titleElement = document.getElementById("title");
titleElement.textContent = "Hi LetPhil Mentee!";
```

---

## 2. Why DOM Matters

You will use DOM skills when:

- Rendering dashboards
- Showing API results on the page
- Updating TuneShelf UI
- Building task lists
- Displaying user data

DOM manipulation is where JavaScript becomes visual.

---

## 3. Tools in this Lesson

### Selectors

- `document.getElementById("idName")`
- `document.querySelector(".className")`
- `document.querySelectorAll("li")`

IMPORTANT:

`querySelectorAll` returns a **collection (NodeList)**, not a single
element.

---

### Changing Text

- `element.textContent = "New text"`

---

### Styling

    element.style.color = "red"
    element.style.backgroundColor = "#0f172a"

or use classes:

    element.classList.add("highlight")
    element.classList.remove("highlight")

---

### Creating and Removing Elements

    document.createElement("li")
    ul.appendChild(li)
    element.remove()

---

## 4. Understanding the Symbols

    document → browser object representing the page
    .querySelector() → finds first matching element
    .querySelectorAll() → finds multiple elements
    .textContent → text inside an element
    .style → inline style control
    .createElement() → creates new HTML element
    .remove() → deletes element from page

---

## 5. Mini Homework -- Favorite Movies DOM Card

On a separate page you will:

1.  Select heading and list elements.
2.  Change the heading text.
3.  Use `textContent` to display how many movies exist.
4.  Create and append a new `<li>`.
5.  Remove one existing `<li>`.

Everything is visible directly on the page.

No events yet --- just DOM practice.
