/* ==========================================================================
   page6.js — анимация сцены страницы 6.

   При нажатии на отца, он поворачивает голову к сыну.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //   Изменяющиеся элементы сцены
  let father = document.getElementById("father_front");
  let father_left = document.getElementById("father_left");

  //   Начальное состояние
  if (father_left) {
    father_left.classList.add("hidden");
  }

  //   Переключение состояния сцены

  let isTurned = false;

  function change_scene() {
    isTurned = !isTurned;

    if (isTurned) {
      // отец оборачивается на сына
      if (father) {
        father.classList.remove("visible");
        father.classList.add("hidden");
      }

      if (father_left) {
        father_left.classList.remove("hidden");
        father_left.classList.add("visible");
      }
    } else {
      //  Отец поворачивается обратно
      if (father_left) {
        father_left.classList.remove("visible");
        father_left.classList.add("hidden");
      }

      if (father) {
        father.classList.remove("hidden");
        father.classList.add("visible");
      }
    }
  }

  // Добавление фукции поворота на кнопку
  if (father) {
    father.addEventListener("click", change_scene);
  }

  if (father_left) {
    father_left.addEventListener("click", change_scene);
  }
});
