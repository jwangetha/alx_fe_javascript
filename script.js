let quotes = [];

// Load quotes from localStorage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
  renderQuotes();
}

// Save quotes to localStorage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Add new quote
document.getElementById('addQuoteBtn').addEventListener('click', () => {
  const quoteText = document.getElementById('quoteInput').value.trim();
  const authorText = document.getElementById('authorInput').value.trim();
  if (quoteText && authorText) {
    quotes.push({ text: quoteText, author: authorText });
    saveQuotes();
    renderQuotes();
    document.getElementById('quoteInput').value = '';
    document.getElementById('authorInput').value = '';
  }
});

// Render quotes to list
function renderQuotes() {
  const list = document.getElementById('quotesList');
  list.innerHTML = '';
  quotes.forEach((q, index) => {
    const li = document.createElement('li');
    li.textContent = `"${q.text}" — ${q.author}`;
    list.appendChild(li);
  });

  // Optionally store last viewed quote in sessionStorage
  if (quotes.length > 0) {
    sessionStorage.setItem('lastQuote', JSON.stringify(quotes[quotes.length - 1]));
  }
}

// Export quotes as JSON
document.getElementById('exportBtn').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();
  URL.revokeObjectURL(url);
});

// Import quotes from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    renderQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}

// Initialize
loadQuotes();
