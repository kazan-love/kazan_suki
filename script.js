window.addEventListener('scroll', function() {
    var contents = document.querySelectorAll('.text');
    contents.forEach(function(content) {
        var contentPosition = content.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.3;

        if (contentPosition < screenPosition) {
            content.classList.add('scroll-active');
        }
    });
});
