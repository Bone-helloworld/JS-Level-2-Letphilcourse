// localStorage HOMEWORK – FAVORITE QUOTE SAVER
// ----------------------------------------------------------
// GOAL: Save a single quote string in localStorage, load it on page load,
//       and clear it when requested.
//
// STEP 1: Select and store the following elements in variables:
//         - quoteInput (id "quoteInput")
//         - saveQuoteBtn (id "saveQuoteBtn")
//         - clearQuoteBtn (id "clearQuoteBtn")
//         - quoteDisplay (id "quoteDisplay")
const quoteInput = document.getElementById("quoteInput");
const saveQuoteBtn = document.getElementById("saveQuoteBtn");
const clearQuoteBtn = document.getElementById("clearQuoteBtn");
const quoteDisplay = document.getElementById("quoteDisplay");
// STEP 2: When the script loads:
//         - Read localStorage.getItem("favoriteQuote").
//         - If a quote exists (not null):
//             * Set quoteDisplay.textContent to that quote.
//             * Also set quoteInput.value to that quote.
//           Else:
//             * Keep the default "No quote saved yet." message.
const favoriteQuote = localStorage.getItem("favoriteQuote");
if (favoriteQuote !== null) {
    quoteDisplay.textContent = favoriteQuote;
    quoteInput.value = favoriteQuote;
} else {
    quoteDisplay.textContent = "No quote saved yet";
}
// STEP 3: Add a "click" event listener to saveQuoteBtn.
//         Inside the listener:
//         - Read the current value from quoteInput.
//         - Use localStorage.setItem("favoriteQuote", value) to save it.
//         - Update quoteDisplay.textContent so it shows the saved quote.
//         - (Optional) If the input is empty, you can decide not to save
//           or show a custom message.
saveQuoteBtn.addEventListener("click", () => {
    const quoteInputVal = quoteInput.value;
    localStorage.setItem("favoriteQuote", quoteInputVal);
    quoteDisplay.textContent = quoteInputVal;
    if (quoteInputVal == "") {
        quoteDisplay.textContent = "Please find your favorite quote and fill it in the text area"
    }
});
// STEP 4: Add a "click" event listener to clearQuoteBtn.
//         Inside the listener:
//         - Use localStorage.removeItem("favoriteQuote").
//         - Clear the textarea (set value to an empty string).
//         - Reset quoteDisplay.textContent to "No quote saved yet."
clearQuoteBtn.addEventListener("click", () => {
    localStorage.removeItem("favoriteQuote");
    quoteInput.value = "";
    quoteDisplay.textContent = "No quote saved yet.";
});