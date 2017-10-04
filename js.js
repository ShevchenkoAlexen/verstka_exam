window.onload = function (){
    "use strict";
     var bat = document.querySelector('.batton');
     console.info(bat);
     bat.onclick = activButton;

     function activButton(){
         this.classList.toggle('activ');
     }
}