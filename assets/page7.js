/* ==========================================================================
   page7.js — анимация сцены страницы 7.

   При нажатии на дверь, она открывается или закрывается.
   При открытии двери меняется тень полу (фона)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //   Изменяющиеся элементы сцены
  // Фон
  let back_close = document.getElementById("background_close");
  let back_open = document.getElementById("background_open");

  // Дверь
  let door_close = document.getElementById("door_close");
  let door_open = document.getElementById("door_open");

  //   Начальное состояние
  //   Фон
  if (back_open) {
    back_open.classList.add("hidden");
  }

  // Дверь
  if (door_open) {
    door_open.classList.add("hidden");
  }

  //   Переключение состояния сцены

  let isTurned = false;

  function changeScene() {
    isTurned = !isTurned;

    if (isTurned) {
      // дверь открывается
      if (door_close) {
        door_close.classList.remove("visible");
        door_close.classList.add("hidden");
      }

      if (door_open) {
        door_open.classList.remove("hidden");
        door_open.classList.add("visible");
      }
      //   фон меняется
      if (back_close) {
        back_close.classList.remove("visible");
        back_close.classList.add("hidden");
      }

      if (back_open) {
        back_open.classList.remove("hidden");
        back_open.classList.add("visible");
      }
    } else {
      //  Дверь закрывается
      if (door_open) {
        door_open.classList.remove("visible");
        door_open.classList.add("hidden");
      }

      if (door_close) {
        door_close.classList.remove("hidden");
        door_close.classList.add("visible");
      }

      //   фон меняется
      if (back_open) {
        back_open.classList.remove("visible");
        back_open.classList.add("hidden");
      }

      if (back_close) {
        back_close.classList.remove("hidden");
        back_close.classList.add("visible");
      }
    }
  }

  // Добавление фукции открытия дверей
  if (door_close) {
    door_close.addEventListener("click", changeScene);
  }

  if (door_open) {
    door_open.addEventListener("click", changeScene);
  }
  if (back_close) {
    back_close.addEventListener("click", changeScene);
  }

  if (back_open) {
    back_open.addEventListener("click", changeScene);
  }
});
