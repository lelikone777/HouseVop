
const menuButton = document.querySelector('.header-menu-burger');
const headerMenu = document.querySelector('.header-menu');
const span = document.querySelector('.header-menu-burger-span');


menuButton.addEventListener('click', event => {
    const target = event.target;
    
   
      if (!span.classList.contains('active')) { 
        span.classList.add('active');
        headerMenu.classList.add('header-menu-animate');
      } else {
        span.classList.remove('active');
        headerMenu.classList.add('header-menu-hiding');
        setTimeout(() => {
          headerMenu.classList.remove('header-menu-animate');
          headerMenu.classList.remove('header-menu-hiding');
        }, 800)
      }
    
  });






// document.querySelector('.header-menu-toggle').classList.toggle("animate")

// document.getElementById("header-menu-burger").onclick = function() {
//     open()
// };

// function open() {
//     document.getElementById("menu").classList.toggle("show");
// }