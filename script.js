let cartCount = 0;

function addToCart() {
cartCount++;
document.getElementById("cart-count").innerText = cartCount;
}

const greeting = document.getElementById("greeting");
if (greeting) {
const hour = new Date().getHours();
const date = new Date().toDateString();
let message = "Good Evening";

if (hour < 12) message = "Good Morning";
else if (hour < 18) message = "Good Afternoon";

greeting.innerText = `${message}! Today is ${date}`;
}

const form = document.getElementById("contactForm");
if (form) {
form.addEventListener("submit", function (e) {
const email = document.getElementById("email").value;
if (!email.includes("@")) {
alert("Please enter a valid email address");
e.preventDefault();
}
});
}

const toggle = document.getElementById("themeToggle");
if (toggle) {
toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});
}
