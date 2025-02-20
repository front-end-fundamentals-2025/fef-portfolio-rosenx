// script.js
document.addEventListener("DOMContentLoaded", function () {

    let images = document.querySelectorAll(".grid-item img");

    images.forEach(image => {

        image.addEventListener("mouseover", function () {
            image.style.opacity = "0.7";
        });


        image.addEventListener("mouseout", function () {
            image.style.opacity = "1";
        });
    });


    let moreButtons = document.querySelectorAll(".grid-item a");

    moreButtons.forEach(button => {

        button.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("You are about to enter the project details page!");
            window.location.href = button.href; 
        });
    });
});
