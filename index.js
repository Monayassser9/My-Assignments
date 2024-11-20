
var quotes = [
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
  ];
  
  
  var quoteText = document.querySelector(".quote");
  var quoteAuthor = document.querySelector(".author");
  var newQuoteButton = document.getElementById("new-quote");
  

  newQuoteButton.onclick = function () {
 
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
  

    quoteText.textContent = '"' + randomQuote.text + '"';
    quoteAuthor.textContent = "-- " + randomQuote.author;
  };
  