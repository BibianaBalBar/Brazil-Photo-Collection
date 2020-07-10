const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const cloud1 = document.querySelector(".moving-cloud-1");
const cloud2 = document.querySelector(".moving-cloud-2");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
    cloud1.classList.toggle("cloud-burger");
    cloud2.classList.toggle("cloud-burger");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("toggle");
    });
});