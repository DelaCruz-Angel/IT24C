const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");

nameInput.addEventListener("input", function() {
    nameOutput.textContent = "Hello, " + nameInput.value + "!";
});

const quotes = [
    "Small progress eachday adds up to big results.",
    "Patience is a key element of success.",
    "The secret of getting ahead is getting started.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The harder the conflict, the greater the triumph."
];

const myButton = document.getElementById("myButton");
const quoteOutput = document.getElementById("quoteOutput");

myButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteOutput.textContent = quotes[randomIndex];
});