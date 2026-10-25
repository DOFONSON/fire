/* ==========================================================================
   page15.js — анимация сцены страницы 15.

   При нажатии на капюшон, он снимается.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const back_open = document.getElementById("back_open");
  const back_close = document.getElementById("back_close");
  const mask = document.getElementById("mask");

  //   Начальное состояние
  if (back_open) {
    back_open.classList.add("hidden");
  }

  //   Переключение состояния сцены
  let isTurned = false;

  function change_scene() {
    isTurned = !isTurned;

    if (isTurned) {
      // глаз открывается
      if (back_close) {
        back_close.classList.remove("visible");
        back_close.classList.add("hidden");
      }

      if (back_open) {
        back_open.classList.remove("hidden");
        back_open.classList.add("visible");
      }
    }
  }

  // Добавление на маску
  if (back_close) {
    mask.addEventListener("click", change_scene);
  }
});
