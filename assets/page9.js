/* ==========================================================================
   page9.js — анимация сцены страницы 9.

  При проводе зажатой мышкой по экрану слева направо, то лицо сына постепенно 
  стирается и появляется лицо отца. При проводе по экрану справо налево, 
  то отец стирается и появляется сын.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //   Изменяющиеся элементы сцены
  let back_son = document.getElementById("son_back");
  let back_father = document.getElementById("father_back");
  let scene = document.getElementById("scene");

  //   Начальное состояние
  // Отец
  if (back_father) {
    back_father.classList.add("hidden");
  }

  //   Переключение состояния сцены
  let isTurned = false;
  let mouse_down = false;
  let startX = 0;
  let moved = false;

  // Изменения на сцене
  function changeScene() {
    isTurned = !isTurned;

    if (isTurned) {
      // показать отца
      back_father.classList.remove("hidden");
      back_father.classList.add("visible");
    } else {
      //  показать сына
      back_father.classList.remove("visible");
      back_father.classList.add("hidden");
    }
  }

  // Нажатие на мышку
  function handleMouseDown(e) {
    // Куда двигается мышка
    const rect = scene.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      return;
    }
    // переназнчение флажков
    mouse_down = true;
    startX = e.clientX;
    moved = false;
  }

  // фиксирование движения
  function handleMouseMove(e) {
    if (!mouse_down) {
      return;
    }
    if (Math.abs(e.clientX - startX) > 3) {
      moved = true;
    }
  }

  // Отпускание мышки
  function handleMouseUp(e) {
    if (!mouse_down) {
      return;
    }
    mouse_down = false;

    if (!moved) {
      return;
    }

    const dx = e.clientX - startX;

    // Слева направо — показать отца
    if (dx > 0 && !isTurned) {
      changeScene();
    }
    // справа налево — вернуть сына
    else if (dx < 0 && isTurned) {
      changeScene();
    }
  }

  // Добавление обработчиков
  scene.addEventListener("mousedown", handleMouseDown);
  scene.addEventListener("mousemove", handleMouseMove);
  scene.addEventListener("mouseup", handleMouseUp);
});
