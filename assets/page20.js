
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const mirror1 = document.getElementById("mirror-1");
    const mirror2 = document.getElementById("mirror-2");
    const mirror3 = document.getElementById("mirror-3");

    if (!mirror1 || !mirror2 || !mirror3) {
        return;
    }

    // Начальное состояние
    mirror1.style.display = "block";
    mirror2.style.display = "none";
    mirror3.style.display = "none";

    let clickCount = 0;

    // Обработка клика по зеркалу
    function breakMirror() {
        clickCount++;

        if (clickCount === 1) {
            mirror1.style.display = "none";
            mirror2.style.display = "block";
        } else if (clickCount === 2) {
            mirror2.style.display = "none";
            mirror3.style.display = "block";
        }
    }

    // Обработчики кликов
    mirror1.addEventListener("click", breakMirror);
    mirror2.addEventListener("click", breakMirror);
});
