//variables
let zen = document.getElementById("zen");

//Event
window.addEventListener("DOMContentLoaded", () =>{
    zen.addEventListener("click", fetchQuote)
})

//Fetch Function
function fetchQuote(){
    fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
    .then(response => response.json())
    .then(data => addQuoteToDom(data.quote))
}

//DOM Manipulation
function addQuoteToDom(quote){
    if(zen.innerText == placeHolder || zen.innerText == placeHolder2) {
        zen.innerText = quote
    }
    else {
        document.querySelector("p").innerText = placeHolder2
    }
}

const placeHolder = "Feeling Down?"
const placeHolder2 = "Still Feeling Down?"