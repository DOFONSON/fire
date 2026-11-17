/* ==========================================================================
   page19.js — анимация сцены страницы 19.

   При клике по крестику на его месте появляется печать.
  ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Изменяющиеся элементы сцены
  const krest = document.getElementById("krest");
  const shtamp = document.getElementById("shtamp");

  // Штамп
  if (shtamp) {
    shtamp.classList.add("hidden");
  }

  //   Переключение состояния сцены
  let isTurned = false;

  function changeScene() {
    isTurned = !isTurned;

    if (isTurned) {
      // крест исчезает, появляется печать
      if (krest) {
        krest.classList.add("hidden");
        shtamp.classList.remove("visible");
        shtamp.classList.add("visible");
      }
    }
  }

  if (krest) {
    krest.addEventListener("click", changeScene);
  }
});
