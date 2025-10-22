// Array of quotes with text and category
const quotes = [
  { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Strive not to be a success, but rather to be of value.", category: "Wisdom" }
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update the DOM with the selected quote
  quoteDisplay.innerHTML = `
    <p><strong>Category:</strong> ${randomQuote.category}</p>
    <p>"${randomQuote.text}"</p>
  `;
}

// Function to add a new quote
function addQuote() {
  const quoteTextInput = document.getElementById('newQuoteText');
  const quoteCategoryInput = document.getElementById('newQuoteCategory');

  const text = quoteTextInput.value.trim();
  const category = quoteCategoryInput.value.trim();

  if (text !== "" && category !== "") {
    quotes.push({ text, category });
    quoteTextInput.value = "";
    quoteCategoryInput.value = "";
    alert("New quote added successfully!");
  } else {
    alert("Please enter both a quote and a category.");
  }
}

// Event listener for showing a new quote
document.getElementById('newQuote').addEventListener('click', displayRandomQuote);

// Event listener for adding a new quote
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);

// Display a random quote on initial load
window.onload = displayRandomQuote;
