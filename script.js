const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const fbBtn = document.getElementById('fb')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = [];

function newQuote() {
    // const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    // console.log(quote)
    // check if Author field is blank and repalce it with unknown
    if(!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }
    // Check the quote length to determine the styling
    if(quote.text.length > 120){
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
  
    quoteText.textContent = quote.text;
}

// Get Quotes from API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        console.log(apiQuotes)
    } catch (error) {
        alert(error)
        // Catch error here
    }
}


//On Load
getQuotes();
// newQuote();