

document.addEventListener("DOMContentLoaded", function () {
    setInterval(function () {
        var carousel = document.getElementById('carouselExampleSlidesOnly');
        var currentIndex = getActiveIndex(carousel);
        carousel.children[0].children[currentIndex].classList.remove('active');
        var nextIndex = (currentIndex + 1) % carousel.children[0].children.length;
        carousel.children[0].children[nextIndex].classList.add('active');
    }, 2000);
});

function getActiveIndex(carousel) {
    for (var i = 0; i < carousel.children[0].children.length; i++) {
        if (carousel.children[0].children[i].classList.contains('active')) {
            return i;
        }
    }
    return -1;
}

console(carouselExampleSlidesOnly);