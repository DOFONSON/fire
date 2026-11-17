/* ==========================================================================
   page17.js — анимация сцены страницы 17.

    При клике на кляксу, клякса пропадает
    (если возможно, то чтобы с каждым нажатием на кляксу она “постепенно” 
    теряла прозрачность, пока окончательно не пропадет (от трёх нажатий, например)

  ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //   Изменяющиеся элементы сцены
  const klyaksa1 = document.getElementById("klyaksa1");
  const klyaksa2 = document.getElementById("klyaksa2");

  // счетчик для кликов
  const MAX_CLICK = 3;
  let clicks = { klyaksa1: 0, klyaksa2: 0 };

  // функция потери прозрачности при кликах
  function opacDecreas(e) {
    // текущая клякса
    let kl = e.currentTarget;
    let id = kl.id;
    let click = clicks[id] || 0;

    // проверка на кол-во кликов
    if (click >= MAX_CLICK) {
      return;
    }

    // увеличение, присваивание
    click++;
    clicks[id] = click;

    // степень прозрачности за клик
    let degree_transparent = click / MAX_CLICK;

    kl.style.setProperty("--opacity", 1 - degree_transparent);
    kl.style.setProperty("--scale", 1 - degree_transparent * 0.4);

    // последний клик
    if (click === MAX_CLICK) {
      kl.style.pointerEvents = "none";
      kl.addEventListener("transitionend", transEnd, { once: true });
    }
  }
  //  удаление
  function transEnd(e) {
    if (e.propertyName !== "opacity") {
      return;
    }
    e.currentTarget.remove();
  }

  // обработчики  
  if (klyaksa1) {
    klyaksa1.addEventListener("click", opacDecreas);
  }
  if (klyaksa2) {
    klyaksa2.addEventListener("click", opacDecreas);
  }
});
