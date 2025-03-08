document.addEventListener("DOMContentLoaded", function() {
    let modal = document.querySelector(".des_modal"); // Получаем элемент по классу
    let btn = document.getElementById("des_openModal"); // Кнопка, открывающая модальное окно
    let closeBtn = document.querySelector(".des_close"); // Кнопка закрытия

    // Проверка, если элементы не найдены
    if (!modal || !btn || !closeBtn) {
        console.error("Не удалось найти элементы!");
        return;
    }

    // Открытие модального окна
    btn.onclick = function() {
        modal.style.display = "block"; // Показать модальное окно
    }

    // Закрытие при клике на крестик
    closeBtn.onclick = function() {
        modal.style.display = "none"; // Скрыть модальное окно
    }

    // Закрытие при клике вне окна
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Закрытие при клике вне окна
        }
    }
});
