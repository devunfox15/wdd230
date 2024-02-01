const myBtn = document.querySelector("#darkBtn");
const main = document.getElementById("main");
const container = document.querySelector(".flex-container");
const containers = document.querySelectorAll(".container");
const h1s = document.querySelectorAll("h1");
const atags = document.querySelectorAll("a");
const body = document.querySelector('body');

    
    

myBtn.addEventListener('click', () => {
    // console.log("Button clicked"); use for debugging clicks
    body.classList.toggle('dark')
    main.classList.toggle('dark');
    myBtn.classList.toggle('dark');
    container.classList.toggle('dark');
    containers.forEach(container => container.classList.toggle('dark'));
    h1s.forEach(h1 => h1.classList.toggle('dark'));
    atags.forEach(atag => atag.classList.toggle('dark'));

    if(myBtn.classList.contains('dark')){
        myBtn.style.top = "113px";
        myBtn.style.right= "10px";
        myBtn.style.width = "44px";
        myBtn.style.background = "black";
        myBtn.style.padding="0px 0x 0px 10px" 
    }else{
        myBtn.style.top = "113px";
        myBtn.style.right= "10px";
        myBtn.style.width = "44px" 
        myBtn.style.background = "whitesmoke";
        myBtn.style.padding="0px 0x 0px 10px"
    }
});