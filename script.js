// Step 1: Define an array of quotes with text and category properties
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "In the middle of every difficulty lies opportunity.", category: "Inspiration" },
  { text: "It always seems impossible until it’s done.", category: "Perseverance" },
];

// Step 2: Function to display a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  // Create dynamic elements for the quote and category
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = ""; // clear previous quote

  const quoteText = document.createElement("p");
  quoteText.textContent = `"${randomQuote.text}"`;

  const quoteCategory = document.createElement("p");
  quoteCategory.innerHTML = `<em>Category: ${randomQuote.category}</em>`;

  quoteDisplay.appendChild(quoteText);
  quoteDisplay.appendChild(quoteCategory);
}

// Step 3: Function to dynamically create a form to add quotes
function createAddQuoteForm() {
  const formContainer = document.createElement("div");

  const textInput = document.createElement("input");
  textInput.id = "newQuoteText";
  textInput.type = "text";
  textInput.placeholder = "Enter a new quote";

  const categoryInput = document.createElement("input");
  categoryInput.id = "newQuoteCategory";
  categoryInput.type = "text";
  categoryInput.placeholder = "Enter quote category";

  const addButton = document.createElement("button");
  addButton.textContent = "Add Quote";

  // Add event to dynamically push new quotes
  addButton.addEventListener("click", function () {
    const text = textInput.value.trim();
    const category = categoryInput.value.trim();

    if (text && category) {
      quotes.push({ text, category });
      textInput.value = "";
      categoryInput.value = "";
      showRandomQuote(); // Show the new quote immediately
    }
  });

  // Append inputs and button to form
  formContainer.appendChild(textInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);

  // Add form to the page below the quote section
  document.body.appendChild(formContainer);
}

// Step 4: Add event listener for the “Show New Quote” button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Step 5: Initialize the form and display the first quote
createAddQuoteForm();
showRandomQuote();
