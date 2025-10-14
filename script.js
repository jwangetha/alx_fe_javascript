// Initialize quotes array
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" }
];

// Function to show random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  
  // Clear and display
  quoteDisplay.innerHTML = `
    <p><strong>${quote.category}</strong>: "${quote.text}"</p>
  `;
}

// Add quote dynamically
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newText = textInput.value.trim();
  const newCategory = categoryInput.value.trim();

  if (!newText || !newCategory) {
    alert("Please enter both a quote and a category.");
    return;
  }

  const newQuote = { text: newText, category: newCategory };
  quotes.push(newQuote);

  textInput.value = "";
  categoryInput.value = "";

  alert("New quote added successfully!");
}

// Event listener for button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Show one quote by default on load
showRandomQuote();
