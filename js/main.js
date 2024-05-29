const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".Navbar_ul")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open")
})


setTimeout(function () {
    const loading = document.getElementById("loading");
    const ld = document.getElementById("ld")
    loading.classList.remove("loading")
    ld.classList.remove("loading_style")
}, 1)
let slideIndex = 0;
showSlides()
function showSlides() {
    let slide = document.getElementsByClassName("fade");
    for(let i=0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slide.length) {slideIndex=1}
    slide[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000)
}
const mobil  = document.getElementById("mobil");
const ever = document.getElementById("everest");
const ranger  = document.getElementById("ranger");
const raptor  = document.getElementById("raptor");

const raptor1 = document.getElementById("raptor1");
const ranger1 = document.getElementById("ranger1");
const everest = document.getElementById("everest1")
mobil.addEventListener("click", () => {
    mobil.classList.add("button");
    //fa.classList.add("foto")
    ever.classList.remove("button");
    ranger.classList.remove("button");
    raptor.classList.remove("button");
    everest.classList.add("grid");
    raptor1.classList.add("grid");
    ranger1.classList.add("grid")
})
ever.addEventListener("click", () => {
    mobil.classList.remove("button");
    ever.classList.add("button")
    ranger.classList.remove("button");
    raptor.classList.remove("button");

    everest.classList.add("card");
    raptor1.classList.add("close");
    ranger1.classList.add("close")

})
raptor.addEventListener("click", () => {
    mobil.classList.remove("button");
    ever.classList.remove("button")
    ranger.classList.remove("button")
    raptor.classList.add("button")
})
ranger.addEventListener("click", () => {
    mobil.classList.remove("button");
    ever.classList.remove("button");
    ranger.classList.add("button")
    raptor.classList.remove("button")
});

const klik = document.getElementById("klik")
klik.addEventListener("click", () => {
    const url = "https://ford.co.id/"
    window.open(url, "blank")
})
