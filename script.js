// script.js
document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.hero-text');
    const eventImage = document.querySelector('.event-image');

    // 初回表示時のアニメーション
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            heroText.style.opacity = '1';
        }
        if (scrollPosition > 300) {
            eventImage.style.opacity = '1';
        }
    });

    // ページ読み込み時に文字を表示
    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 1000);
});
