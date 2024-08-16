document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

/* Smooth Scroll Function (Optional) */
function smoothScroll(target) {
    document.getElementById(target).scrollIntoView({
        behavior: 'smooth'
    });
}
