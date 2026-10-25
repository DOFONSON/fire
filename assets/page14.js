/* ==========================================================================
   page14.js — анимация сцены страницы 14.

   При нажатии на глаз, он открывается.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const open_eye = document.getElementById("eye_open");
  const close_eye = document.getElementById("eye_close");
  const eye_mask = document.getElementById("eye_mask");

  //   Начальное состояние
  if (open_eye) {
    open_eye.classList.add("hidden");
  }

  //   Переключение состояния сцены
  let isTurned = false;

  function change_scene() {
    isTurned = !isTurned;

    if (isTurned) {
      // глаз открывается
      if (close_eye) {
        close_eye.classList.remove("visible");
        close_eye.classList.add("hidden");
      }

      if (open_eye) {
        open_eye.classList.remove("hidden");
        open_eye.classList.add("visible");
      }
    }
    // else {
    //   //  Если нужно обратно закрыть
    //   if (open_eye) {
    //     open_eye.classList.remove("visible");
    //     open_eye.classList.add("hidden");
    //   }

    //   if (close_eye) {
    //     close_eye.classList.remove("hidden");
    //     close_eye.classList.add("visible");
    //   }
    // }
  }

  // Добавление на маску
  if (close_eye) {
    eye_mask.addEventListener("click", change_scene);
  }
  // если нужно снова закрыть
  //   if (open_eye) {
  //     eye_mask.addEventListener("click", change_scene);
  //   }
});
