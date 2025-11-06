let slideIndex = 0, slideTimer = null;

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");
    for (let s of slides) s.style.display = "none";
    slideIndex = (slideIndex + 1 > slides.length) ? 1 : slideIndex + 1;
    for (let d of dots) d.classList.remove("active");
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    clearTimeout(slideTimer);
    slideTimer = setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

window.addEventListener("load", showSlides);