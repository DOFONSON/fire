/* ==========================================================================
   page18.js — анимация сцены страницы 18.

    При клике на любую звезду, на месте звезды появляются глаза.
  ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Изменяющиеся элементы сцены
  const star1 = document.getElementById("star1");
  const star2 = document.getElementById("star2");
  const star3 = document.getElementById("star3");
  const eyes1 = document.getElementById("eyes1");
  const eyes2 = document.getElementById("eyes2");
  const eyes3 = document.getElementById("eyes3");

  // Глаза
  if (eyes1) {
    eyes1.classList.add("hidden");
  }
  if (eyes2) {
    eyes2.classList.add("hidden");
  }
  if (eyes3) {
    eyes3.classList.add("hidden");
  }

  //   Переключение состояния сцены
  function changeScene(e) {
    const star = e.target;

    if (star1 && star == star1) {
      star1.classList.add("hidden");
      star1.classList.remove("visible");
      eyes1.classList.add("visible");
      return;
    }
    if (star2 && star == star2) {
      star2.classList.add("hidden");
      star2.classList.remove("visible");
      eyes2.classList.add("visible");
      return;
    }
    if (star3 && star == star3) {
      star3.classList.add("hidden");
      star3.classList.remove("visible");
      eyes3.classList.add("visible");
      return;
    }
  }

  if (star1) {
    star1.addEventListener("click", changeScene);
  }
  if (star2) {
    star2.addEventListener("click", changeScene);
  }
  if (star3) {
    star3.addEventListener("click", changeScene);
  }
});
