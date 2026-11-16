
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const door = document.getElementById("door");

    if (!door) {
        return;
    }

    // Длительность анимации
    const ANIMATION_DURATION = 2000;

    // Открытие двери по нажатию
    door.addEventListener("click", function () {

        // Защита от повторного нажатия
        if (door.classList.contains("hidden")) {
            return;
        }

        // Запуск анимации исчезновения двери
        door.classList.add("hidden");

        // После завершения анимации отключаем возможность взаимодействия
        setTimeout(function () {
            door.style.pointerEvents = "none";
        }, ANIMATION_DURATION);

    });
});
