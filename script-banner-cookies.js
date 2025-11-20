document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, показывался ли баннер
    if (!localStorage.getItem("cookiesAccepted")) {
        // Создаём баннер
        const banner = document.createElement("div");
        banner.className = "cookie-banner";
        banner.innerHTML = `
            <p class="banner-text">Мы используем cookies для улучшения работы сайта.</p>
            <a href="privacy.html" class="banner-link">Подробнее</a>
            <button class="banner-btn">ОК</button>
        `;
        document.body.appendChild(banner);

        // Действие при клике на кнопку
        banner.querySelector(".banner-btn").addEventListener("click", function() {
            localStorage.setItem("cookiesAccepted", "true");
            banner.remove();
        });
    }
});