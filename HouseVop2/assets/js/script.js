
const menuButton = document.querySelector('.header-menu-burger');
const headerMenu = document.querySelector('.header-menu');
const span = document.querySelector('.header-menu-burger-span');




// document.getElementById("header-menu-burger").addEventListener('click', function(){
//     headerMenu.classList.toggle('header-menu-animate');
//     span.classList.toggle('active');
    
    
// })




menuButton.addEventListener('click', event => {
    const target = event.target;
    
   
      if (!span.classList.contains('active')) { 
        headerMenu.classList.add('header-menu-animate');
        span.classList.add('active');
      } else {
        span.classList.remove('active');
        headerMenu.classList.add('header-menu-hiding');
        // setTimeout(() => {
        //     headerMenu.classList.remove('header-menu-animate');
        //     headerMenu.classList.remove('header-menu-hiding');
        //   }, 400)
      }
    
  });






// document.querySelector('.header-menu-toggle').classList.toggle("animate")

// document.getElementById("header-menu-burger").onclick = function() {
//     open()
// };

// function open() {
//     document.getElementById("menu").classList.toggle("show");
// }