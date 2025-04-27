 # <-- Style Toggle --> 
```HTML 
    <!--=============== STYLE SWITCHER ===============-->
    <div class="style-switcher">
      <h2 class="style-switcher-title">
        Style Switcher
      </h2>
      <div class="style-switcher-item">
        <h3 class="style-switcher-subtitle">Colors</h3>
        <div class="style-switcher-colors">
          <span class="style-switcher-color" style="--hue:165">
            <i class="ri-check-line"></i>
          </span>
          <span class="style-switcher-color active-color" style="--hue:260">
            <i class="ri-check-line"></i>
          </span>
          <span class="style-switcher-color" style="--hue:345">
            <i class="ri-check-line"></i>
          </span>
          <span class="style-switcher-color" style="--hue:165">
            <i class="ri-check-line"></i>
          </span>
          <span class="style-switcher-color" style="--hue:65">
            <i class="ri-check-line"></i>
          </span>
          <span class="style-switcher-color" style="--hue:15">
            <i class="ri-check-line"></i>
          </span>
        </div>
      </div>
      <div class="style-switcher-item">
        <h3 class="style-switcher-subtitle">Theme</h3>
        <div class="style-switcher-themes">
          <div class="style switcher-theme">
            <input type="radio" class="style-switcher-input" 
                   name="body-theme" 
                   id="light-theme" 
                   value="light" 
                   checked="true" />
            <label for="light-theme" class="label-style-switcher">Light</label>
          </div>
          <div class="style switcher-theme">
            <input type="radio" class="style-switcher-input" 
                   name="body-theme" 
                   id="dark-theme" 
                   value="dark" />
            <label for="dark-theme" class="label-style-switcher">Dark</label>
          </div>
          <div class="style-switcher-close">
            <i class="ri-close-line"></i>
          </div>
        </div>
      </div>
    </div>
```
```CSS
/*=============== DARK THEME ===============*/
.dark{
  --title-color: hsl(0,0%,100%);
  --text-color: hsl(0 0%, 92%);
  --body-color: hsl(var(--hue), 10%, 8%);
  --container-color: hsl(var(--hue), 10%, 16%);
  --border-color: hsl(var(--hue), 4%, 65%);
  --shadow-color: hsla(var(--hue), 0%, 100%, 0.2);
}
.dark .shape{
  filter: invert(1);
}
/*=============== STYLE SWITCHER ===============*/
.style-switcher{
  position: fixed;
  top: 0;
  right: -100%;
  width: 450px;
  height: 100%;
  background-color: var(--container-color);
  padding: 5rem 3.5rem;
  z-index: 1000;
}
.style-switcher-title{
  font-size: var(--h3-font-size);
  padding-bottom: 1.25rem;
}
.style-switcher-title,
.style-switcher-item{
  border-bottom: 1px solid var(--shadow-color);
}
.style-switcher-item{
  padding-block: 1rem;
}
.style-switcher-subtitle{
  font-size: var(--large-font-size);
  margin-bottom: 1rem;
}
.style-switcher-colors{
  display: flex;
  column-gap: .5rem;
}
.style-switcher-color{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--first-color);
  position: relative;
}
.style-switcher-color i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color:white;
  font-size: 1.2rem;
  display: none;
}
.active-color i{
  display: block;
}

.style-switcher-themes,
.style-switcher-theme{
display: flex;
}
.style-switcher-themes{
  column-gap: 1.25rem;
}
.style-switcher-theme{
  columns: 0.5rem;
}
.style-switcher-input {
  accent-color: var(--first-color);
}
.style-switcher-label{
  color: var(--title-color);
}
.style-switcher-close{
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
}
```
```javascript
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
```
# <-- End Style Toggle  -->

# Item Filter
```html
   <div class="container">
        <ul class="work-list">
          <li class="work-item active-work" data-filter="all">All</li>
          <li class="work-item"data-filter=".Development">Development</li>
          <li class="work-item"data-filter=".Branding">Branding</li>
          <li class="work-item"data-filter=".Photography">Photography</li>
        </ul>

        <div class="work-container grid">
          <div class="mix Branding">
            <div class="card">
              <img class="work-img" src="assets/img/project1.jpeg" alt="project">

              <h4 class="work-category">kjhkjhk</h4>
              <h3 class="work-title">mmmmm</h3>

              <p class="work-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus!</p>

              <a href="" class="link">See Pricing <i class="ri-arrow-right-line link-icon"></i></a>
            </div>
          </div>
          <div class="mix Development">
            <div class="card">
              <img class="work-img" src="assets/img/project1.jpeg" alt="project">

              <h4 class="work-category">kjhkjhk</h4>
              <h3 class="work-title">mmmmm</h3>

              <p class="work-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus!</p>

              <a href="" class="link">See Pricing <i class="ri-arrow-right-line link-icon"></i></a>
            </div>
          </div>
          <div class="mix Development">
            <div class="card">
              <img class="work-img" src="assets/img/project1.jpeg" alt="project">

              <h4 class="work-category">kjhkjhk</h4>
              <h3 class="work-title">mmmmm</h3>

              <p class="work-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus!</p>

              <a href="" class="link">See Pricing <i class="ri-arrow-right-line link-icon"></i></a>
            </div>
          </div>
          <div class="mix Photography">
            <div class="card">
              <img class="work-img" src="assets/img/project1.jpeg" alt="project">

              <h4 class="work-category">kjhkjhk</h4>
              <h3 class="work-title">mmmmm</h3>

              <p class="work-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus!</p>

              <a href="" class="link">See Pricing <i class="ri-arrow-right-line link-icon"></i></a>
            </div>
          </div>
          <div class="mix Photography">
            <div class="card">
              <img class="work-img" src="assets/img/project1.jpeg" alt="project">

              <h4 class="work-category">kjhkjhk</h4>
              <h3 class="work-title">mmmmm</h3>

              <p class="work-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, accusamus!</p>

              <a href="" class="link">See Pricing <i class="ri-arrow-right-line link-icon"></i></a>
            </div>
          </div>
          
        </div>
      </div>
```

```css
.work-list{
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3.75rem;
  justify-content: center;
}
.work-item{
  color: var(--title-color);
  font-size: var(--small-font-size);
  font-weight: var(--font-bold);
  cursor: pointer;
  position: relative;
  transition: color 0.7s var(--transition);
}
.work-item:hover{
  color: var(--first-color);
}
.work-item::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  transform: translateX(-50%);
  width: 0px;
  height: 2px;
  background-color: var(--first-color);
  transition: width 0.3s var(--transition);
}

/* Active work */
.active-work{
  color: var(--first-color);
}
.active-work::before{
  width: 60%;
}
.work-container{
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.work-img{
  height: 240px;
  width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}
.work-category{
  font-size: var(--smaller-font-size);
  color: var(--first-color);
  font-weight: var(--font-semi-bold);
  margin-bottom: 1rem;
}
.work-title{
  font-size: var(--h3-font-size);
  margin-block:0.75rem 1rem;
}
.work-description{
  min-height: 125px;
}
```

```javascript
  /*<!--=============== MIXITUP ===============-->*/
<script src="assets/js/mixitup.min.js"></script>
/*=============== MIXITUP FILTER  ===============*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});

/* Active work */

const LinkWork = document.querySelectorAll('.work-item')

function activeWork(){
    LinkWork.forEach((a)=>{
        a.classList.remove('active-work');
    });
    this.classList.add('active-work');
}

LinkWork.forEach((a)=>a.addEventListener(('click'),activeWork))
```
# <-- End Item Filter -->

# accordion
```html
 <!--=============== RESUME ===============-->
    <section class="resume section">
      <h2 class="section-title" data-title="My Story">Resume</h2>

      <div class="resume-container container grid">
        <div class="resume-group">
          <h3 class="resume-title">Education</h3>

          <div class="resume-items">
            <div class="resume-item">
              <div class="resume-header">
                <h3 class="resume-header-title">Information Technology Institute                
                </h3>

                <img src="./assets/img/ITI-logo.png" alt="iti-logo" class="resume-header-img"> 
                            
                <span class="resume-icon">
                  <i class="ri-add-line"></i>
                </span>
              </div>

              <div class="resume-content">
                <div class="resume-content-header">
                  <h3 class="resume-content-title">Frontend Programming
                  </h3>
                  <span class="resume-date">2025 - Present</span>
                </div>

                <p class="resume-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                </p>
              </div>
            </div>

            <div class="resume-item">
              <div class="resume-header">
                <h3 class="resume-header-title">National Telecommunication Institute (NTI)
                </h3>
                <img src="./assets/img/NTI-logo.png" alt="iti-logo" class="resume-header-img">

                <span class="resume-icon">
                  <i class="ri-add-line"></i>
                </span>
              </div>

              <div class="resume-content">
                <div class="resume-content-header">
                  <h3 class="resume-content-title">MEAN-STACK Developer</h3>
                  <span class="resume-date">2024 - 2025</span>
                </div>

                <p class="resume-description">Lorem ipsum dolor sit amet,
                   consectetur adipisicing elit. Explicabo, dignissimos.</p>
              </div>
            </div>

            <div class="resume-item">
              <div class="resume-header">
                <h3 class="resume-header-title">Skills Dynamix </h3>
                <img src="./assets/img/Skills-dynamix-logo.png" alt="skills-dynamix-logo" class="resume-header-img">
                <span class="resume-icon">
                  <i class="ri-add-line"></i>
                </span>
              </div>

              <div class="resume-content">
                <div class="resume-content-header">
                  <h3 class="resume-content-title">Full-Stack Php developer</h3>
                  <span class="resume-date">2023 - 2024</span>
                </div>

                <p class="resume-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="resume-group">
          <h3 class="resume-title">Experience</h3>

          <div class="resume-items">
            <div class="resume-item">
              <div class="resume-header">
                <h3 class="resume-header-title">UI Head & Manager
                </h3>
                <span class="resume-icon">
                  <i class="ri-add-line"></i>
                </span>
              </div>

              <div class="resume-content">
                <div class="resume-content-header">
                  <h3 class="resume-content-title">Soft Tech Inc</h3>
                  <span class="resume-date">2020 - Present</span>
                </div>

                <p class="resume-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div class="resume-item">
              <div class="resume-header">
                <h3 class="resume-header-title">UI / UX Specialist
                </h3>
                <span class="resume-icon">
                  <i class="ri-add-line"></i>
                </span>
              </div>

              <div class="resume-content">
                <div class="resume-content-header">
                  <h3 class="resume-content-title">Kana Design Studio

                  </h3>
                  <span class="resume-date">2018 - 2020</span>
                </div>

                <p class="resume-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div class="resume-item">
              <div class="resume-header">
                <h3 class="resume-header-title">Plugins Developer
                </h3>
                <span class="resume-icon">
                  <i class="ri-add-line"></i>
                </span>
              </div>

              <div class="resume-content">
                <div class="resume-content-header">
                  <h3 class="resume-content-title">Fiverr.com
                  </h3>
                  <span class="resume-date">2016 - 2018</span>
                </div>

                <p class="resume-description">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
```
```css
/*=============== RESUME ===============*/
.resume-container{
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}
.resume-title{
  font-size: var(--h3-font-size);
  padding-bottom: 2rem;
  text-align: center;
}
.resume-title,
.resume-item{
  border-bottom: 1px solid var(--border-color);
}
.resume-item:not(:first-child){
  border-right: 2px solid var(--border-color);
}
.resume-item{
  position: relative;
  padding-inline: 1.5rem;
}
.resume-header{
  padding-block: 1.5rem;
  cursor: pointer;
  display: flex;
  position: relative;
}
.resume-header-title{
  color: var(--first-color);
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
}

.resume-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.5rem;
  /* margin: auto 0; */
  /* width: 100%; */
  /* height: 100%; */
}

.resume-header-img{
  height: 100px;
  width: 100px;
  /* position: absolute; */
  object-fit:contain;
  margin-right: 50px;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 4px 4px var(--shadow-color);
  border: 2px solid var(--first-color);
  padding:15px 0px;
  /* left: 40%; */
  /* top: 20px; */
  margin-bottom: 1.5rem;
  /* margin-top: 1.5rem; */
  
}
.resume-icon{
  position: absolute;
  right: -1.25rem;
  bottom: -1.25rem;
  background-color: var(--container-color);
  border: 2px solid var(--border-color);
  box-shadow: 4px 4px var(--shadow-color);
  color: var(--title-color);
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  z-index: 10;
}

.resume-content{
  height: 0;
  overflow: hidden;  
}

.resume-content-header{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 2rem;
}
.resume-content-title{
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
}
.resume-date{
  color: var(--title-color);
  font-size: var(--smaller-font-size);
  font-weight: var(--font-bold);
  margin-right: 3.7rem;
}
.resume-description{
  /* font-size: var(--smaller-font-size); */
  margin-block: 1.5rem;
}
```
```js
/*=============== Accordion ===============*/
const accordionItems = document.querySelectorAll('.resume-item');
accordionItems.forEach((item)=>{
    const header = item.querySelector('.resume-header'),
          content = item.querySelector('.resume-content'),
          icon = item.querySelector('.resume-icon i');
    
    header.addEventListener('click',()=>{
        const isOpen = item.classList.toggle('accordion-open')

        content.style.height = isOpen ? content.scrollHeight + 'px' : 0;
        icon.className = isOpen ? 'ri-subtract-line' : 'ri-add-line';
        // icon.style.color = isOpen ? '#' : '#111';

        accordionItems.forEach((otherItem)=>{
            if(otherItem !== item && 
                otherItem.classList.contains('accordion-open'))
                {
                otherItem.classList.remove('accordion-open')
                otherItem.querySelector('.resume-content').style.height = '0';
                otherItem.querySelector('.resume-icon i').className = 'ri-add-line';
            }
        })
    });


})
```