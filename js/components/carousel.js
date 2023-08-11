/* ============= CAROUSEL =========== */

const carouselContainer = document.querySelector(".carousel__container");
const carouselIndicator = document.querySelectorAll(".carousel__indicator");
console.log(carouselContainer);
carouselIndicator.forEach((indicator, i) => {
    carouselIndicator[i].addEventListener("click", () => {
        let position = i;
        let translate = position * -100 / 6;

        carouselContainer.style.transform = `translateX(${translate}%)`

        carouselIndicator.forEach((indicator, i) => {
            carouselIndicator[i].classList.remove("carousel__indicator--active")
        });
        carouselIndicator[i].classList.add("carousel__indicator--active")
    })
})