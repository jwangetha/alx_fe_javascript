// Global quotes array
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Motivation" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "Perseverance" }
];

// Function to display a random quote
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update DOM
  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <p><em>Category: ${randomQuote.category}</em></p>
  `;
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (newQuoteText && newQuoteCategory) {
    quotes.push({
      text: newQuoteText,
      category: newQuoteCategory
    });

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Refresh display
    displayRandomQuote();
  }
}

// Event listener for “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Display one quote on load
displayRandomQuote();
