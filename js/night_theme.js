const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeBackgroundImg = document.body;
const body = document.body;

// Функция обновления иконки
function updateIcon() {
    themeIcon.src = body.classList.contains("dark-mode") ? "pictures/ai dark.png" : "pictures/ai white.png";
}

// Проверяем, есть ли сохраненная тема
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Устанавливаем правильную иконку при загрузке
updateIcon();

// Обработчик клика по кнопке переключения темы
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    
    updateIcon(); // Обновляем иконку после изменения темы
});

