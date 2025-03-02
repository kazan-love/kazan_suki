// script.js
document.addEventListener('DOMContentLoaded', function () {
    const heroText = document.querySelector('.hero-text');
    const overlay = document.querySelector('.overlay');

    // 初回表示時のアニメーション
    window.addEventListener('scroll', function () {
        let scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            heroText.style.opacity = '1';
            heroText.classList.add('permanent');
        }
        if (scrollPosition > 300) {
            overlay.style.opacity = '1';
            overlay.style.transform = 'translateX(0)';
        }
    });

    // ページ読み込み時に文字を表示
    setTimeout(() => {
        heroText.style.opacity = '1';
    }, 1000);
});
