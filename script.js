// script.js
document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.hero-text');
    const leftImage = document.querySelector('.event-image.left');
    const rightImage = document.querySelector('.event-image.right');

    // 初回表示時のアニメーション
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            heroText.style.opacity = '1';
        }
        if (scrollPosition > 300) {
            leftImage.style.opacity = '1';
            leftImage.style.transform = 'translateX(100%)';
        }
        if (scrollPosition > 600) {
            rightImage.style.opacity = '1';
            rightImage.style.transform = 'translateX(-100%)';
        }
    });

    // ページ読み込み時に文字を表示
    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 1000);
});
