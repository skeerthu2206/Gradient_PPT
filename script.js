// WAIT until page fully loads
document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {

        // remove current active
        slides[index].classList.remove("active");

        // calculate next index safely
        index = (i + slides.length) % slides.length;

        // add active to new slide
        slides[index].classList.add("active");
    }

    // NEXT BUTTON
    window.nextSlide = function () {
        showSlide(index + 1);
    }

    // PREVIOUS BUTTON
    window.prevSlide = function () {
        showSlide(index - 1);
    }

    // KEYBOARD SUPPORT
    document.addEventListener("keydown", function (e) {

        if (e.key === "ArrowRight") {
            showSlide(index + 1);
        }

        if (e.key === "ArrowLeft") {
            showSlide(index - 1);
        }

    });

});