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

document.addEventListener("DOMContentLoaded", function(){
    let thumbnails = document.querySelectorAll(".image-popup");
    let popupBackground = document.querySelector("#popup-background");
    let popupTitle = document.querySelector("#popup-title");
    let popupImage = document.querySelector("#popup-image");

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function(){
            popupBackground.style.display = "block";
            popupTitle.innerHTML = this.alt;
            popupImage.src = this.src;
        })
    }
    popupBackground.addEventListener("click", function(){
        popupBackground.style.display = "none";
    })
    document.addEventListener("keydown", function(e){
        if (e.keyCode == 27) {
            popupBackground.style.display = "none";
        }
    })
})
