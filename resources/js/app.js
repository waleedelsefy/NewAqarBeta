const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const unitsContainer = document.querySelector('.units-of-projects');
let scrollAmount = 0;
const unitCardWidth = document.querySelector('.col-lg-6').offsetWidth;
prevButton.addEventListener('click', () => {
    scrollAmount += unitCardWidth;
    unitsContainer.style.transform = `translateX(${scrollAmount}px)`;
});
nextButton.addEventListener('click', () => {
    scrollAmount -= unitCardWidth;
    unitsContainer.style.transform = `translateX(${scrollAmount}px)`;
});
