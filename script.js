// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Button was clicked!");
// });

function updateDisplay(){
    let Textbox = document.getElementById("textbox");
    let displaytext = document.getElementById("displaytext");

    displaytext.textContent = Textbox.value;

}