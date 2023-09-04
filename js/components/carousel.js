/* ============= CAROUSEL =========== */

const carouselContainer = document.querySelector(".carousel__container");
const carouselIndicator = document.querySelectorAll(".carousel__indicator");
const carouselLeft = document.getElementById("carousel-left");
const carouselRight = document.getElementById("carousel-right");
console.log(carouselContainer);

/* carouselLeft.addEventListener("click", moveToLeft) */

/* carouselIndicator.forEach((indicator, i) => {
    carouselIndicator[i].addEventListener("click", () => {
        let position = i;
        let translate = position * -100 / 6;

        carouselContainer.style.transform = `translateX(${translate}%)`

        carouselIndicator.forEach((indicator, i) => {
            carouselIndicator[i].classList.remove("carousel__indicator--active")
        });
        carouselIndicator[i].classList.add("carousel__indicator--active")
    })
}) */

let counter = 1;

const moveToRight = () => {
    let position = counter++;
    let translate = position * -100 / 6;
    if (position <= 3) {
        carouselContainer.style.transform = `translateX(${translate}%)`;
    }

    if (position > 3) {
        counter = 1;
        carouselContainer.style.transform = `translateX(0%)`
    }
}

const moveToLeft = () => {
    let position = counter--;
    let translate = position * 100 / 6;
    if (position >= 1) {
        carouselContainer.style.transform = `translateX(${translate}%)`;
    }

    if (counter <= 1) {
        counter = 3;
        let translate = counter * 100 / 6;
        carouselContainer.style.transform = `translateX(${translate}%)`
    }
}

carouselRight.addEventListener("click", moveToRight);
carouselLeft.addEventListener("click", moveToLeft);

/* carouselLeft.addEventListener("click", () => {
    let position = 1;
    position++;
    let translate = position * 100 / 6;
    console.log(translate, "translate-left");
    
    if (translate > 0) {
        carouselContainer.style.transform = `translateX(${translate}%)`
    }
}) */

// Dragging function

/* let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    console.log("start");
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselContainer.scrollLeft;
}

const dragging = (e) => {
    console.log("dragging");
    if (!isDragStart) return;
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX;
    carouselContainer.scrollLeft = prevScrollLeft - positionDiff;
    console.log(positionDiff);
    if (positionDiff > -100 && positionDiff < 0) {
        carouselContainer.style.transform = `translateX(${positionDiff}%)`
    }
}

const dragStop = () => {
    console.log("stop");
    isDragStart = false;
}

carouselContainer.addEventListener("mousedown", dragStart);
carouselContainer.addEventListener("mousemove", dragging);
carouselContainer.addEventListener("mouseup", dragStop); */