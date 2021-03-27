// console.log(localStorage);

// localStorage.setItem('my data', JSON.stringify({ name: 'dat' }));
// console.log(localStorage.getItem('my data'));
// console.log(JSON.parse(localStorage.getItem('my data')));

import refs from'./refs.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const refs.switchToggleRef = document.querySelector('#theme-switch-toggle');
console.log(refs.switchToggleRef);
// const refs.bodyRef=document.querySelector('body');


refs.switchToggleRef.addEventListener('change', onChangeSwitchToggleTheme);

populateCheckBoxToggle();

function onChangeSwitchToggleTheme(evt) {
    const toggleValue = evt.target.checked;
    console.log(toggleValue)

    if (refs.switchToggleRef.checked) {
        changeClassBody(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
    }
    else {
        changeClassBody(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
    }
}

function changeClassBody(addClass, removeClass){
    refs.bodyRef.classList.add(addClass);
    refs.bodyRef.classList.remove(removeClass);
}

function populateCheckBoxToggle() {
    const saveTheme = localStorage.getItem('Theme');
    if (saveTheme === Theme.DARK) {
        refs.switchToggleRef.checked = true;
        changeClassBody(Theme.DARK, Theme.LIGHT);
    }
    else{
        refs.switchToggleRef.checked = false;
        changeClassBody(Theme.LIGHT, Theme.DARK);
    }
}