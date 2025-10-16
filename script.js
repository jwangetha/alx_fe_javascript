// Pre-filled quotes array with required structure
let quotes = [
  { text: "Believe in yourself!", category: "Motivation" },
  { text: "The journey of a thousand miles begins with one step.", category: "Wisdom" },
  { text: "Do what you can, with what you have, where you are.", category: "Inspiration" }
];

// Display random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quote-text').textContent = randomQuote.text;
  document.getElementById('quote-category').textContent = randomQuote.category;
}

// Add new quote
function addQuote() {
  const quoteText = document.getElementById('quoteInput').value.trim();
  const categoryText = document.getElementById('categoryInput').value.trim();

  if (quoteText && categoryText) {
    quotes.push({ text: quoteText, category: categoryText });
    document.getElementById('quoteInput').value = '';
    document.getElementById('categoryInput').value = '';
    displayRandomQuote(); // update DOM
  }
}

// Event listeners
document.getElementById('showQuoteBtn').addEventListener('click', displayRandomQuote);
document.getElementById('addQuoteBtn').addEventListener('click', addQuote);

// Show one quote on page load
displayRandomQuote();
