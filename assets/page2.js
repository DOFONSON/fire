/* ==========================================================================
   page2.js — интерактивная сцена страницы 2.

   Логика:
   - клик по руке запускает её движение;
   - рука с рукавом уходит по диагонали влево и вниз;
   - под рукой открываются шрамы, которые находятся на фоне;
   - тень и свет мигают с разной частотой.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';


  /* ===== Элементы сцены ===== */

  var hand = document.getElementById('hand');
  var shadow = document.getElementById('shadow');
  var light = document.getElementById('light');


  /* ===== Состояние руки ===== */

  var handMoved = false;


  /* ===== Анимация руки ===== */

  function moveHand() {
    if (!hand || handMoved) {
      return;
    }

    handMoved = true;
    hand.classList.add('hand-move');
  }


  /* ===== Клик по руке ===== */

  if (hand) {
    hand.addEventListener('click', moveHand);
  }


  /* ===== Моргание тени ===== */

  if (shadow) {
    shadow.classList.add('shadow-blink');
  }


  /* ===== Моргание света ===== */

  if (light) {
    light.classList.add('light-blink');
  }
});
