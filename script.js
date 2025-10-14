// Step 1: Define the quotes array
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Motivation" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Perseverance" }
];

// Step 2: Display a random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <p><em>Category: ${randomQuote.category}</em></p>
  `;
}

// Step 3: Add a new quote dynamically
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText && newQuoteCategory) {
    quotes.push({ text: newQuoteText, category: newQuoteCategory });
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
    displayRandomQuote(); // immediately show the added quote
  }
}

// Step 4: Add event listener for the “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Initialize the display
displayRandomQuote();
