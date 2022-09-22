//letiables
let zen = document.getElementById("zen");

//Event
window.addEventListener("DOMContentLoaded", () => {
  zen.addEventListener("click", fetchQuote)
})

//Fetch Function
function fetchQuote() {
  fetch("https://motivational-quote-api.herokuapp.com/quotes/random")
    .then(response => response.json())
    .then(data => addQuoteToDom(data.quote))
}

//DOM Manipulation
function addQuoteToDom(quote) {
  if (zen.innerText == placeHolder || zen.innerText == placeHolder2) {
    zen.innerText = quote
  }
  else {
    zen.innerText = placeHolder2
  }
}

const placeHolder = "Feeling Down?"
const placeHolder2 = "Still Feeling Down?"
//




// Brain Dump ------------------->

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
let closebutton = document.querySelector('closed')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

// closebutton.addEventListener('click', () => {
//   document.querySelector(".popup").style.display = "none"
// })

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

    window.addEventListener("load", function(){
        setTimeout(
            function open(event){
                document.querySelector(".popup").style.display = "block";
            },
            1000
        )
    });
    
    
    document.querySelector("#close").addEventListener("click", function(){
        document.querySelector(".popup").style.display = "none";
    });


    
// Brain Dump  end------------------->


$ = function(id) {
  return document.getElementById('dumpFeelings');
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}

