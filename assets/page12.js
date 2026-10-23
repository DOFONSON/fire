document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const scene = document.getElementById("scene");

  if (!scene) return;

  let lightsOff = false;
  let headTimer = null;
  let headIsTurned = false;

  // Выключаем свет первым кликом
  function turnLightsOff() {
    if (lightsOff) return;

    lightsOff = true;
    scene.classList.add("lights-off");

    // После затемнения запускаем повороты головы
    headTimer = setTimeout(function () {
      turnHead();
    }, 1200);
  }

  // Сын смотрит то в одну, то в другую сторону
  function turnHead() {
    if (!lightsOff) return;

    headIsTurned = !headIsTurned;

    scene.classList.toggle(
      "head-turned",
      headIsTurned
    );

    headTimer = setTimeout(function () {
      turnHead();
    }, 2000);
  }

  scene.addEventListener("click", function () {
    if (!lightsOff) {
      turnLightsOff();
    }
  });
});