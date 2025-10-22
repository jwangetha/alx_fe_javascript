const quotes = [
  { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Strive not to be a success, but rather to be of value.", category: "Wisdom" }
];

function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = `<p><strong>Category:</strong> ${randomQuote.category}</p><p>"${randomQuote.text}"</p>`;
}

function addQuote() {
  const quoteTextInput = document.getElementById("newQuoteText");
  const quoteCategoryInput = document.getElementById("newQuoteCategory");
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

document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

window.onload = displayRandomQuote;
