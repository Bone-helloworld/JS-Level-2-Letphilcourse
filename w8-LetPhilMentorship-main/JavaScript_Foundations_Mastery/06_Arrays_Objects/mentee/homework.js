// HOMEWORK — SIMPLE CONTACT CARD
// -----------------------------------------------

// STEP 1: Create an array called contacts.
//         It should contain at least 2 objects.

let contacts = [
    {name: "Nam", phone: 123-456, isFavorite : true},
    {name: "Hanah", phone: 789-101, isFavorite: false},
];
// STEP 2: Each contact object needs:
//         name (string)
//         phone (string or number)
//         isFavorite (boolean)


// STEP 3: Log the total number of contacts.
console.log(contacts.length);

// STEP 4: Log the name of the first contact.
console.log(contacts[0].name);

// STEP 5: Update one contact’s isFavorite value.
contacts[0].isFavorite = false;

// STEP 6: Add (push) a new contact object.
contacts.push({name: "Jocelyn Flores", phone: 555-555, isFavorite: true});
// STEP 7: Log the updated contacts array.
console.log(contacts)