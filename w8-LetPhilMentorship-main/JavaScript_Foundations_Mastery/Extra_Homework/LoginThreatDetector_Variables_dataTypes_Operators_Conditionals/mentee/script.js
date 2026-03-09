// ✅ LOGIN THREAT DETECTOR
// Goal: Decide if a login attempt is safe, suspicious, or should be locked.
// Decision rules must use ONLY: variables, data types, operators, conditionals.
// DOM + event listeners are allowed for UI interaction.

// Step 1: Get references to the DOM elements using document.getElementById()
// Store references for:
// - failed attempts input        → id="failedAttempts"
// - unusual location dropdown    → id="unusualLocation"
// - recognized device dropdown   → id="recognizedDevice"
// - scan button                  → id="scanBtn"
// - message paragraph            → id="message"
// - status text output           → id="statusText"
// - status details output        → id="statusDetails"
// - attempts output              → id="attemptsOut"
// - location output              → id="locationOut"
// - device output                → id="deviceOut"


const failedAttempts = document.getElementById("failedAttempts");
const unusualLocation = document.getElementById("unusualLocation");
const recognizedDevice = document.getElementById("recognizedDevice");
const scanBtn = document.getElementById("scanBtn");
const message = document.getElementById("message");
const statusText = document.getElementById("statusText");
const statusDetails = document.getElementById("statusDetails");
const attemptsOut = document.getElementById("attemptsOut");
const locationOut = document.getElementById("locationOut");
const deviceOut = document.getElementById("deviceOut");

// Step 2: Add a click event listener to the Scan button
// When clicked, run your security decision logic

scanBtn.addEventListener("click", function() {
// Step 3: convert inputs and run the decision logic
    const failedAttemptsValue = Number(failedAttempts.value);
    const unusualLocationValue = unusualLocation.value;
    const recognizedDeviceInput = recognizedDevice.value;
    const unusual = unusualLocationValue === "yes";
    const recognized = recognizedDeviceInput === "yes";


    // Step 4: validation
   if (!failedAttempts.value || failedAttemptsValue < 0) {
        message.textContent = "Please enter a valid number, or failed attempts (like 0,1,2,3)";
        message.className = "message danger"
   }
    // Step 5: show selected values
    attemptsOut.textContent = String(failedAttemptsValue);
    locationOut.textContent = unusual ? "Yes" : "No";
    deviceOut.textContent = recognized ? "Yes" : "No";

    // Step 6: decide status
    let status = "";
    let details = "";

    // Step 7: realistic rules
    if (failedAttemptsValue >= 5) {
        status = "ACCOUNT LOCKED";
    } else if (unusual === true && recognized === false) {
        status = "SUSPICIOUS";
    } else if (failedAttemptsValue >= 3 && unusual === true) {
        status = "SUSPICIOUS";
    } else {
        status = "LOGIN APPROVED";
    }

    // Step 8: details message
    if (status === "ACCOUNT LOCKED") {
        details = "Too many failed attempts. Please reset your password.";
    } else if (status === "SUSPICIOUS") {
        details = "Unusual sign-in detected. Verify identity.";
    } else {
        details = "No major risk indicators detected.";
    }

    // Step 9: update UI and colour classes
    statusText.textContent = status;
    statusDetails.textContent = details;
    // remove all colour classes first
    statusText.classList.remove("safe", "warn", "danger");
    if (status === "ACCOUNT LOCKED") {
        statusText.classList.add("danger");
    } else if (status === "SUSPICIOUS") {
        statusText.classList.add("warn");
    } else {
        statusText.classList.add("safe");
    }

    // Step 10: helpful tip
    if (status === "SUSPICIOUS") {
        message.textContent = "Tip: Turn on 2FA.";
        message.classList.add("message warn");
    } else if (status === "ACCOUNT LOCKED") {
        message.textContent = "Tip: Use 'Forgot Password' to recover account.";
        message.classList.add("message danger");
    } else {
        message.textContent = "Tip: Keep your device recognized for faster logins.";
        message.classList.add("message safe");
    }
});