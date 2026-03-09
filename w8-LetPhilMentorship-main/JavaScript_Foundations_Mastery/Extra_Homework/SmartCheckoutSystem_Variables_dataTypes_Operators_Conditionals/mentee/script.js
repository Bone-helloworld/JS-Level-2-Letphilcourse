// ✅ SMART CHECKOUT SYSTEM
// Goal: Calculate discount + shipping + final total based on inputs.
// Logic rules must use ONLY: variables, data types, operators, conditionals.
// We ARE allowed to use DOM + event listeners because this is the Realistic UI version.

// Step 1: Get references to the DOM elements we need using document.getElementById()
// Store references for:
// - cart total input        → id="cartTotal"
// - membership dropdown     → id="membership"
// - coupon dropdown         → id="coupon"
// - calculate button        → id="calcBtn"
// - message paragraph       → id="message"
// - subtotal display        → id="subtotalText"
// - discount display        → id="discountText"
// - shipping display        → id="shippingText"
// - final total display     → id="finalTotalText"
const cartTotalInput = document.getElementById("cartTotal");
const membershipDropdown = document.getElementById("membership");
const couponDropdown = document.getElementById("coupon");
const calculateButton = document.getElementById("calcBtn");
const messageParagraph = document.getElementById("message");
const subtotalDisplay = document.getElementById("subtotalText");
const discountDisplay = document.getElementById("discountText");
const shippingDisplay = document.getElementById("shippingText");
const finalTotalDisplay = document.getElementById("finalTotalText");

// Step 2: Add a click event listener to the Calculate button
// When the button is clicked, run the checkout calculation function
calculateButton.addEventListener("click", function() {
        // This function will run when the button is clicked
        const cartTotal = Number(cartTotalInput.value);
        const membership = membershipDropdown.value;
        const coupon = couponDropdown.value;
        const hasCoupon = coupon === "Yes";

        // Step 4: Validation check using a conditional
        // If cartTotal is empty OR cartTotal <= 0:
        // - set message text to a warning
        // - STOP the function early (return)
        if (!cartTotal || cartTotal <= 0) {
            messageParagraph.textContent = "Please enter a valid cart total greater than 0.";
            return;
        }

    // Step 5: Create checkout calculation variables
    // - subtotal
    // - discountAmount
    // - shippingCost
    // - totalAfterDiscount
    // - finalTotal

    let subTotal = cartTotal;
    let discountAmount = 0;
    let shippingCost = 0;
    let totalAfterDiscount = 0;
    let finalTotal = 0;

    // Step 6: Determine membership discount using conditionals
    // Rules:
    // - If membership is "premium" → 15% off subtotal
    // - Else if membership is "vip" → 25% off subtotal
    // - Else (standard) → 0% discount

    if (membership === "premium") {
        discountAmount = subTotal * 0.15;
    } else if (membership === "vip") {
        discountAmount = subTotal * 0.25;
    } else if (membership === "standard") {
        discountAmount = 0;
    }

    // Step 7: Apply coupon using conditionals
    // If hasCoupon is true:
    // - add EXTRA 10% discount of subtotal

    if (hasCoupon === true){
        discountAmount += subTotal * 0.10;
    }

    // Step 8: Calculate the total AFTER discount (before shipping)
    // totalAfterDiscount = subtotal - discountAmount

    totalAfterDiscount = subTotal - discountAmount;

    // Step 9: Determine shipping using conditionals
    // Rules:
    // - If totalAfterDiscount >= 150 → shippingCost = 0 (free shipping)
    // - Else → shippingCost = 9.99

    if (totalAfterDiscount >= 150) {
        shippingCost = 0;
    } else {
        shippingCost = 9.99;
    }

    // Step 10: Calculate final total using operators
    // finalTotal = totalAfterDiscount + shippingCost

    finalTotal = totalAfterDiscount + shippingCost;

    // Step 11: Update the UI (the receipt values) using textContent
    // - subtotalText shows subtotal as money
    // - discountText shows discountAmount as money
    // - shippingText shows shippingCost as money
    // - finalTotalText shows finalTotal as money

    subtotalDisplay.textContent = `$${subTotal.toFixed(2)}`;
    discountDisplay.textContent = `$${discountAmount.toFixed(2)}`;
    shippingDisplay.textContent = `$${shippingCost.toFixed(2)}`;
    finalTotalDisplay.textContent = `$${finalTotal.toFixed(2)}`;

    // Step 12: Update the message text using conditionals
    // If shippingCost is 0 → show "Free shipping unlocked"
    // Else → show "Add $X more to unlock free shipping"
    // (You can calculate X = 150 - totalAfterDiscount)

    if (shippingCost === 0) {
        messageParagraph.textContent = "Free shipping unlocked!";
    } else {
        let amountToFreeShipping = 150 - totalAfterDiscount;
        messageParagraph.textContent = `Add $${amountToFreeShipping.toFixed(2)} more to unlock free shipping!`;
    }
});