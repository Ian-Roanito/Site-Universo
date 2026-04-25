const menuBtn = document.querySelector(".btn-mobile");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelector(".nav-list a");
const icon = document.querySelector(".btn-mobile i");

menuBtn.addEventListener("click", ()=> {

    navList.classList.toggle("show");
    navLink.classList.toggle("show");

    // Muda o icone do botão
    icon.classList.toggle('bi-x-lg');
    icon.classList.toogle('bi-list');
})
