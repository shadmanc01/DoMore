//Event
window.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("p").addEventListener("click", fetchQuote)
})

//Fetch Function
function fetchQuote(){
    fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
    .then(response => response.json())
    .then(data => addQuoteToDom(data.quote))
}

//DOM Manipulation
function addQuoteToDom(quote){
    if(document.querySelector("p").innerText == placeHolder || document.querySelector("p").innerText == placeHolder2) {
        document.querySelector("p").innerText = quote
    }
    else {
        document.querySelector("p").innerText = placeHolder2
    }
}

const placeHolder = "Feeling Down?"
const placeHolder2 = "Still Feeling Down?"