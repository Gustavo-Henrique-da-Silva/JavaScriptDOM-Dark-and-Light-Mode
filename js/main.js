function changeTheme(){
    console.log("Cliquei");
    changeColor();
    changeText();
}

function changeColor(){
    button.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    brand.classList.toggle("dark-mode");
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains('dark-mode')){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const nav = document.getElementById('nav');
const brand = document.getElementById('brand')
console.log(nav);
console.log(brand);
button.addEventListener('click', changeTheme);

