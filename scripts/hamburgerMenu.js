const hamburgerElement = document.querySelector("#myBtn");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener('click', () => {
    // console.log("Button clicked");
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open')
});