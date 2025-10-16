// Quotes array with text and category properties
const quotes = [
  { text: "Believe in yourself!", category: "Motivation" },
  { text: "The journey of a thousand miles begins with one step.", category: "Wisdom" },
  { text: "Do what you can, with what you have, where you are.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("quote-text").textContent = randomQuote.text;
  document.getElementById("quote-category").textContent = randomQuote.category;
}

// Function to add a new quote
function addQuote() {
  const text = document.getElementById("new-quote-text").value.trim();
  const category = document.getElementById("new-quote-category").value.trim();

  if (text && category) {
    quotes.push({ text, category });
    document.getElementById("new-quote-text").value = "";
    document.getElementById("new-quote-category").value = "";
    displayRandomQuote(); // update DOM after adding
  }
}

// Event listeners
document.getElementById("new-quote").addEventListener("click", displayRandomQuote);
document.getElementById("add-quote").addEventListener("click", addQuote);

// Display one quote on page load
displayRandomQuote();
