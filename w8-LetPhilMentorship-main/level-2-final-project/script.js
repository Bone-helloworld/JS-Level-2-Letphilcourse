const btn = document.getElementById("lang-btn");
const text = btn.querySelector(".lang-text");

let currentLang = "EN";

btn.addEventListener("click", () => {
  if (currentLang === "EN") {
    text.textContent = "VN";
    currentLang = "VN";
  } else {
    text.textContent = "ENG";
    currentLang = "EN";
  }
});
