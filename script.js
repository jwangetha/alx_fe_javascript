// Quotes array with text and category properties
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you’re busy making other plans.", category: "Life" },
  { text: "Do not watch the clock; do what it does. Keep going.", category: "Perseverance" }
];

// Function: displayRandomQuote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  if (quotes.length === 0) {
    quoteDisplay.textContent = "No quotes available. Please add one!";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.textContent = `"${randomQuote.text}" — ${randomQuote.category}`;
}

// Function: addQuote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText === "" || newQuoteCategory === "") {
    alert("Please fill in both fields!");
    return;
  }

  quotes.push({ text: newQuoteText, category: newQuoteCategory });

  // Clear input fields
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  displayRandomQuote();
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show a quote initially
displayRandomQuote();
