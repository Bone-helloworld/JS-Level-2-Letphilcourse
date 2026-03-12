# 06 -- Arrays & Objects

This lesson introduces two of the **MOST important** data structures in
JavaScript: Arrays `[]` and Objects `{}`.

You will use these in almost every project --- dashboards, API
apps, localStorage, and DOM rendering.

---

## 1. What are Arrays?

Arrays store **multiple values** inside one variable --- like a list.

Real‑life examples:

- 🎵 A playlist of songs
- 🛒 A grocery list
- 👩‍💻 A list of mentees

Example:

```js
let snacks = ["Chips", "Chocolate", "Cookies"];
```

Arrays use **indexes**, starting at `0`:

```js
console.log(snacks[0]); // "Chips"
```

### When to use Arrays

Use arrays when:

- Order matters
- You will loop through items
- You have many similar values

---

## 2. What are Objects?

Objects store **descriptive data** using key/value pairs.

Real‑life example --- a profile card:

- name
- age
- isStudent
- hobbies

Example:

```js
let person = {
  name: "Ana",
  age: 21,
  isStudent: true,
};
```

Accessing values:

```js
console.log(person.name);
console.log(person["age"]);
```

### When to use Objects

Use objects when:

- You describe ONE thing
- Data has labels
- Each value has meaning

---

## 3. Arrays vs Objects (SUPER IMPORTANT)

Arrays `[]` = ordered lists

Example:

```js
["Ana", "John", "Maria"];
```

Objects `{}` = labeled data

Example:

```js
{ name: "Ana", age: 21 }
```

Quick comparison:

Feature Arrays \[\] Objects {}

---

Structure List Key/Value
Access Index Key
Use Case Many similar items One detailed item
Order Matters Yes Not required

---

## 4. Arrays CAN Contain Objects (Real App Structure)

Most real apps combine BOTH concepts.

Example:

```js
let users = [
  { name: "Ana", age: 21 },
  { name: "John", age: 30 },
];
```

Think of it like:

- Array = container
- Object = data for each item

This is EXACTLY how API data works.

---

## 5. Understanding the Symbols

Beginners often ask what these mean:

    []  → Array brackets
    {}  → Object braces
    :   → separates key and value
    ,   → separates items

Example breakdown:

```js
{
  name: "Ana";
}
```

- `{}` = object
- `name` = key
- `"Ana"` = value

---

## 6. Why Arrays & Objects Matter

You will use arrays and objects when:

- Rendering lists to the DOM
- Saving data to localStorage
- Working with API responses
- Managing state in JavaScript apps

---

## 7. Mini Homework --- "Simple Contact Card"

You will:

1.  Create an **array** called `contacts`.
2.  Each contact is an **object** with:
    - `name`
    - `phone`
    - `isFavorite`
3.  Log:
    - total contacts
    - first contact's name
4.  Update:
    - change `isFavorite` of one contact
5.  Add:
    - push a new contact object

Everything stays in the **console** --- no DOM yet.
