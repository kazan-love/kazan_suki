window.addEventListener('scroll', function() {
    var content = document.querySelector('.content');
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (contentPosition < screenPosition) {
        content.classList.add('scroll-active');
    }
});
