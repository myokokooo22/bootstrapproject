//for nav
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log(getscrolly);
    if(getscrolly >=200){
        navbar.classList.add('navs');
    }else{
        navbar.classList.remove('navs');
    }
});

//footer
let year = document.getElementById('year');
let today = new Date().getFullYear();
year.textContent = today;

