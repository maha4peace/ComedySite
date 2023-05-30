const navToggleBar = document.getElementById('navbartoggle');
const navMenu = document.getElementById('nav-menu');
const closeNavBarToggle = document.getElementById('closenavbartoggle');


navToggleBar.addEventListener('click', () => {
    navMenu.style.display = "flex" ;
    navToggleBar.style.display = "none";
    closeNavBarToggle.style.display = "block";
    
}); 

closeNavBarToggle.addEventListener('click', () => {
    navMenu.style.display = "none";
    navToggleBar.style.display = "block";
    closeNavBarToggle.style.display = "none";
}); 





