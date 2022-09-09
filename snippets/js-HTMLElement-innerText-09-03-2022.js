// Safe way to set the text content inside your div element.
const divElement = document.querySelector("div");

divElement.innerText = "You're born naked and the rest is drag.";

// This property can be prone to XSS software attacks.
const ulElement = document.querySelector("ul");

ulElement.innerHTML = "<li>Jujubee</li>";
