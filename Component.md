 # Style Toggle 
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

