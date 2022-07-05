let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}   

window.onscroll =() =>{
    enu.classList.remove('fa-times');
    navbar.classList.remove('active');
}