/*=============== MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
/* Menu show - hidden */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("animate-toggle");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const Header = document.getElementById("header");
  this.scrollY >= 20 ? Header.classList.add("bg-header") : Header.classList.remove("bg-header");  
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
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
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */

const LinkWork = document.querySelectorAll(".work-item");

function activeWork() {
  LinkWork.forEach((a) => {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

LinkWork.forEach((a) => a.addEventListener("click", activeWork));

/*=============== RESUME ===============*/
const accordionItems = document.querySelectorAll(".resume-item");
accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
    content = item.querySelector(".resume-content"),
    icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : 0;
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";
    // icon.style.color = isOpen ? '#' : '#111';

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.classList.remove("accordion-open");
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").className = "ri-add-line";
      }
    });
  });
});

/*=============== TESTIMONIALS SWIPER ===============*/
var servicesSwiper = new Swiper(".testimonials-swiper", {
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

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactSubject = document.getElementById("contact-subject"),
  contactMessage = document.getElementById("contact-message"),
  message = document.getElementById("message");

const sendEmail = (e) => {
    e.preventDefault();
    
    if (
        contactName.value === "" ||
        contactEmail.value === "" ||
        contactSubject.value === "" ||
        contactMessage.value === ""
    ) {
        message.classList.remove("color-first");
        message.classList.add("color-red");
        alert("Fill in all the input fields");
    } else {
        emailjs
        .sendForm(
            "service_a2zer0c",
            "template_wehibuf",
            "#contact-form",
            "2ygY8LR1aK8VsLYyb"
        )
        .then(
            () => {
            message.classList.add("color-green");
            alert ("Message sent successfully ✔") ;
           
            },
            (error) => {
            message.classList.add("color-red");
            alert("OOPs! SOMETHING WENT WRONG...",error) ;
            }
        );
        contactName.value = "";
        contactEmail.value = "";
        contactSubject.value = "";
        contactMessage.value = "";
    }
};
contactForm.addEventListener("submit", sendEmail);

/*=============== STYLE SWITCHER ===============*/
const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle"),
  switcherClose = document.getElementById("switcher-close");

/* Switcher show */
switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

/* Switcher hidden */
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/*=============== THEME COLORS ===============*/
const colors = document.querySelectorAll(".style-switcher-color");

let activeColor = localStorage.getItem("activeColor");
if (!activeColor) {
  activeColor = getComputedStyle(colors[0]).getPropertyValue("--hue");
  document.documentElement.style.setProperty("--hue", activeColor);
  colors[0].classList.add("active-color");
} else {
  document.documentElement.style.setProperty("--hue", activeColor);
  colors.forEach((color) => {
    if (color.style.getPropertyValue("--hue") === activeColor) {
      color.classList.add("active-color");
    }
  });
}

colors.forEach((color) => {
  color.onclick = () => {
    const newColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));

    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", newColor);

    localStorage.setItem("activeColor", newColor);
  };
});

/*=============== LIGHT/DARK MODE ===============*/
let currentTheme = localStorage.getItem("Theme") || "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  if (input.value === currentTheme) {
    input.checked = true;
  }
  input.addEventListener("change", () => {
    currentTheme = input.value;
    document.body.className = currentTheme;
    localStorage.setItem("Theme", currentTheme);
  });
});

/*=============== Footer ===============*/
document.getElementById('spanYear').textContent = new Date().getFullYear();
