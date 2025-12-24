let slideIndex = 0, slideTimer = null;
let advCount = 2;
let advTimer = null;

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

function initAdvCarousel() {
    const banner = document.getElementById("banner");
    if (!banner) {
        return;
    }
    changebgcolor(1);
    advCount = 2;
    for (let i = 1; i <= 4; i++) {
        const anchor = document.getElementById(`a${i}`);
        if (!anchor) {
            continue;
        }
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            changebgcolor(i);
            advCount = i === 4 ? 1 : i + 1;
            resetAdvTimer();
        });
    }
    resetAdvTimer();
}

function resetAdvTimer() {
    if (advTimer) {
        clearInterval(advTimer);
    }
    advTimer = setInterval(carousel, 2000);
}

function carousel() {
    changebgcolor(advCount);
    advCount = advCount === 4 ? 1 : advCount + 1;
}

function changebgcolor(iNum) {
    const banner = document.getElementById("banner");
    if (!banner) {
        return;
    }
    banner.src = `images/b-ad${iNum}.jpg`;
    for (let i = 1; i <= 4; i++) {
        const anchor = document.getElementById(`a${i}`);
        if (!anchor) {
            continue;
        }
        anchor.style.backgroundColor = i === iNum ? "hsl(20,30%,50%)" : "hsl(20,50%,30%)";
    }
}

window.addEventListener("load", () => {
    showSlides();
    initAdvCarousel();
});