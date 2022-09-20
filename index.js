//letiables
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
//
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

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

// clock
window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
     
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      
      const hourTime = hour > 12 ? hour - 12 : hour;
  
    
      const ampm = hour < 12 ? "AM" : "PM";
  
      
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      
      const dateTime = date + " - " + time;
  
      
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });
    // clock end
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

