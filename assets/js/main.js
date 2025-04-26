/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle');     
/* Menu show - hidden */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
    navToggle.classList.toggle('animate-toggle')
});

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SERVICES SWIPER ===============*/
var servicesSwiper = new Swiper(".services-swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      },
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

/* Active work */

/*=============== RESUME ===============*/

/*=============== TESTIMONIALS SWIPER ===============*/

/*=============== EMAIL JS ===============*/

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById('style-switcher'),
switcherToggle = document.getElementById('switcher-toggle'),
switcherClose = document.getElementById('switcher-close');

/* Switcher show */
switcherToggle.addEventListener('click',()=>{
    styleSwitcher.classList.add('show-switcher')
})

/* Switcher hidden */
switcherClose.addEventListener('click',()=>{
    styleSwitcher.classList.remove('show-switcher')
})

/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll('.style-switcher-color');

let activeColor = localStorage.getItem('activeColor');
if (!activeColor) {
    activeColor = getComputedStyle(colors[0]).getPropertyValue('--hue');
    document.documentElement.style.setProperty('--hue', activeColor);
    colors[0].classList.add('active-color'); 
} else {
    document.documentElement.style.setProperty('--hue', activeColor);
    colors.forEach((color) => {
        if (color.style.getPropertyValue('--hue') === activeColor) {
            color.classList.add('active-color');
        }
    });
}

colors.forEach((color) => {
    color.onclick = () => {
        const newColor = color.style.getPropertyValue('--hue');

        colors.forEach((c) => c.classList.remove('active-color'));

        color.classList.add('active-color');

        document.documentElement.style.setProperty('--hue', newColor);

        localStorage.setItem('activeColor', newColor);
    };
});

/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = localStorage.getItem('Theme')||'light';
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input)=>{
    if(input.value === currentTheme){
        input.checked = true;
    }
    input.addEventListener('change',()=>{
        currentTheme = input.value;
        document.body.className = currentTheme;
        localStorage.setItem('Theme',currentTheme);
    });
});