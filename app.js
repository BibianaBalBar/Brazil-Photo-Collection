// burger

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


// pop up

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add("open");
        original.classList.add("open");
        //dynamic change text and img
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./img/${originalSrc}`;        
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});
