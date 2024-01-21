// const quoteText = document.getElementById('quote-text');
// const authorText = document.getElementById('author');
// const newQuoteBtn = document.getElementById('new-quote-btn');

// async function getQuote() {
//   try {
//     const response = await fetch('https://api.quotable.io/random');
//     const data = await response.json();
//     quoteText.textContent = data.content;
//     authorText.textContent = `- ${data.author}`;
//   } catch (error) {
//     console.log('Error fetching quote', error);
//   }
// }

// newQuoteBtn.addEventListener('click', getQuote);

// getQuote();


const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');


const quotes = [
  { text: '"The only way to do great work is to love what you do."', author: 'Steve Jobs' },
  { text: '"Stay hungry, stay foolish."', author: 'Steve Jobs' },
  { text: '"The only limit to our realization of tomorrow will be our doubts of today."', author: 'Franklin D. Roosevelt' },
  { text: '"Believe you can and you are halfway there."', author: 'Theodore Roosevelt' },
  { text: '"In the middle of every difficulty lies opportunity."', author: 'Albert Einstein' },
  { text: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon' },
  { text: '"The way to get started is to quit talking and begin doing."', author: 'Walt Disney' },
  { text: '"The greatest glory in living lies not in never falling, but in rising every time we fall."', author: 'Nelson Mandela' },
  { text: '"Do not wait to strike till the iron is hot, but make it hot by striking."', author: 'William Butler Yeats' },
  { text: '"Life is 10% what happens to us and 90% how we react to it." ', author: 'Charles R. Swindoll' },
  { text: '"The only limit to our realization of tomorrow will be our doubts of today."', author: 'Franklin D. Roosevelt' },
  
];

function getRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

function displayQuote() {
  const { text, author } = getRandomQuote();
  quoteText.textContent = text;
  authorText.textContent = `- ${author}`;
}

newQuoteBtn.addEventListener('click', displayQuote);
displayQuote(); 

