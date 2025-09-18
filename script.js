// -------------------------------
// Part 1: Variable Declarations & Conditionals
// -------------------------------
let name = "Alice";
let age = 20;

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// -------------------------------
// Part 2: Custom Functions
// -------------------------------
function greetUser(username) {
  return "Hello, " + username + "!";
}

function calculateSquare(number) {
  return number * number;
}

console.log(greetUser("Bob"));         // Example usage
console.log(calculateSquare(5));       // Example usage

// -------------------------------
// Part 3: Loops
// -------------------------------

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count: " + i);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While loop count: " + counter);
  counter++;
}

// -------------------------------
// Part 4: DOM Interactions
// -------------------------------

// (1) Update text content
const message = document.getElementById("message");
document.getElementById("updateBtn").addEventListener("click", () => {
  message.textContent = "The text has been updated via JavaScript!";
});

// (2) Change color of text
document.getElementById("colorBtn").addEventListener("click", () => {
  message.style.color = "red";
});

// (3) Add items dynamically to a list
const numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = "Item " + i;
  numberList.appendChild(li);
}

