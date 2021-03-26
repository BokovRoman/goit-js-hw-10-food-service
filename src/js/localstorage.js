// console.log(localStorage);

// localStorage.setItem('my data', JSON.stringify({ name: 'dat' }));
// console.log(localStorage.getItem('my data'));
// console.log(JSON.parse(localStorage.getItem('my data')));

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchToggleRef = document.querySelector('#theme-switch-toggle');
console.log(switchToggleRef);
const bodyRef=document.querySelector('body');


switchToggleRef.addEventListener('change', onChangeSwitchToggleTheme);

populateCheckBoxToggle();

function onChangeSwitchToggleTheme(evt) {
    const toggleValue = evt.target.checked;
    console.log(toggleValue)

    if (switchToggleRef.checked) {
        changeClassBody(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
    }
    else {
        changeClassBody(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}

function changeClassBody(addClass, removeClass){
    bodyRef.classList.add(addClass);
    bodyRef.classList.remove(removeClass);
}

function populateCheckBoxToggle() {
    const saveTheme = localStorage.getItem('Theme');
    if (saveTheme === Theme.DARK) {
        switchToggleRef.checked = true;
        changeClassBody(Theme.DARK, Theme.LIGHT);
    }
    else{
        switchToggleRef.checked = false;
        changeClassBody(Theme.LIGHT, Theme.DARK);
    }
}