
    var trig = document.getElementById('hamburger');
    var isClosed = true;
   
   trig.addEventListener('click', function (event){
      if (isClosed == true) {
        trig.classList.remove("is-open");
        trig.classList.add("is-closed");
        isClosed = false;

      } else {
        trig.classList.remove("is-closed");
        trig.classList.add("is-open");
        isClosed = true;
      }
      event.preventDefault();
    });