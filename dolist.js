(function(){
  
    let list = document.querySelector('#list');
    let form = document.querySelector('form');
    let item = document.querySelector('#item');
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      list.innerHTML += '<ol>' + item.value + '</ol>';
      store();
      item.value = "";
    },false)
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    },false)
    
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
      var storedValues = window.localStorage.myitems;
        list.innerHTML = storedValues;      
    }
    getValues();
  })();