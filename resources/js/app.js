const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let carouselVp = document.querySelector("#carousel-vp");

let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerHeight = cCarouselInner.getBoundingClientRect().height;

let topValue = 0;

// Variable used to set the carousel movement value (card's height + gap)
const totalMovementSize =
    parseFloat(
        document.querySelector(".cCarousel-item").getBoundingClientRect().height,
        10
    ) +
    parseFloat(
        window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
        10
    );

prev.addEventListener("click", () => {
    if (!topValue) {
        topValue -= totalMovementSize;
        cCarouselInner.style.top = topValue + "px";
    }
});

next.addEventListener("click", () => {
    const carouselVpHeight = carouselVp.getBoundingClientRect().height;
    if (carouselInnerHeight - Math.abs(topValue) > carouselVpHeight) {
        topValue -= totalMovementSize;
        cCarouselInner.style.top = topValue + "px";
    }
});

const mediaQuery510 = window.matchMedia("(max-width: 510px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportHeight = window.innerHeight;

function mediaManagement(event) {
    const newViewportHeight = window.innerHeight;

    if (
        (topValue <= -totalMovementSize && oldViewportHeight < newViewportHeight) ||
        (topValue <= -totalMovementSize && oldViewportHeight > newViewportHeight)
    ) {
        topValue += event.matches ? totalMovementSize : -totalMovementSize;
        cCarouselInner.style.top = topValue + "px";
        oldViewportHeight = newViewportHeight;
    }
}
