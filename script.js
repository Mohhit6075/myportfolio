const menu = document.querySelector(".ham-menu");
const hamburger = document.querySelector(".hamburger");
const ham_close = document.querySelector(".ham-close");
  hamburger.addEventListener("click", function() {
    if(  menu.style.display ==="none"){
      menu.style.display ="flex";
      hamburger.style.opacity  = 0;
      ham_close.style.display =  "block";
    }
    else{
      menu.style.display ="none";
      hamburger.style.opacity  = 1;

    }
  });
  ham_close.addEventListener("click", function() {
    if(  menu.style.display ==="flex"){
        menu.style.display ="none";
        hamburger.style.opacity  = 1;
        ham_close.style.display =  "none";
      }
      else{
        menu.style.display ="flex ";
  
      }
  })