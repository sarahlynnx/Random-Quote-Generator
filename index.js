const text = document.getElementById("text");
const author = document.getElementById("author");
const twitterLink = document.getElementById("tweet-quote");
const quoteButton = document.getElementById("new-quote");
const icon = document.querySelector(".fa-quote-left");
const twitterIcon = document.querySelector(".fa-x-twitter");


const quotes = [
  'Confusion is part of programming.',
  'No matter which field of work you want to go in, it is of great importance to learn at least one programming language.', 
  'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.', 
  'There is always one more bug to fix.', 
  'If, at first, you do not succeed, call it version 1.0.',
  'Everybody in this country should learn to program a computer because it teaches you how to think.',
  'First, solve the problem. Then write the code.'
];

const authorList = [
  'Felienne Hermans', 
  'Ram Ray', 
  'Dan Salomon', 
  'Ellen Ullman',
  'Khayri R.R. Woulfe',
  'Steve Jobs',
  'John Johnson'
]

function getRandomIndex() {
  return Math.floor(Math.random() * quotes.length);
}
 
const colors = [
  '#D32F2F',
  '#C2185B', 
  '#7B1FA2',
  '#512DA8',
  '#303F9F',
  '#1976D2',
  '#0288D1',
  '#0097A7',
  '#00796B',
  '#388E3C',
  '#689F38',
  '#AFB42B',
  '#FBC02D',
  '#F57C00',
  '#E64A19',
  '#5D4037',
  '#616161',
  '#455A64'
]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

function changeColors() {
  const backgroundColor = getRandomColor();
  const textColor = getRandomColor();  
      document.body.style.backgroundColor = backgroundColor;
      document.body.style.color = textColor;
      icon.style.color = backgroundColor;
      text.style.color = backgroundColor;
      author.style.color = backgroundColor;
      twitterIcon.style.backgroundColor = backgroundColor;
      quoteButton.style.backgroundColor = backgroundColor;
  }

quoteButton.addEventListener("click", () => {

  changeColors();

  const randomIndex = getRandomIndex();
  const currentQuote = quotes[randomIndex];
  const currentAuthor = authorList[randomIndex];
  
  text.textContent = currentQuote;
  author.textContent = '- ' + currentAuthor;

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote}" - ${currentAuthor}`)}`;

  twitterLink.href = tweetUrl;
});

changeColors();
