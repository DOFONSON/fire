/* ==========================================================================
   page1.js — интерактивная сцена страницы 1.

   Логика:
   - клик по девушке -> девушка оборачивается;
   - вместо руки появляется парень;
   - тень и свет мигают с разной частотой.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ===== Элементы сцены ===== */

  var girl = document.getElementById('girl');
  var girl2 = document.getElementById('girl_2');

  var hand = document.getElementById('hand');
  var boy = document.getElementById('boy');

  var shadow = document.getElementById('shadow');
  var light = document.getElementById('light');


  /* ===== Начальное состояние ===== */

  if (girl2) {
    girl2.classList.add('hidden');
  }

  if (boy) {
    boy.classList.add('hidden');
  }


  /* ===== Переключение состояния сцены ===== */

  var isTurned = false;

  function changeScene() {
    isTurned = !isTurned;

    if (isTurned) {
      /*
       * Девушка оборачивается:
       * старая картинка исчезает,
       * новая появляется.
       */
      if (girl) {
        girl.classList.remove('visible')
        girl.classList.add('hidden');
      }

      if (girl2) {
        girl2.classList.remove('hidden');
        girl2.classList.add('visible');
      }

      /*
       * Рука исчезает,
       * вместо неё появляется парень.
       */
      if (hand) {
        hand.classList.remove('visible')
        hand.classList.add('hidden');
      }

      if (boy) {
        boy.classList.remove('hidden');
        boy.classList.add('visible');
      }
    } else {
      /*
       * Возвращаем исходное состояние.
       */
      if (girl2) {
        girl2.classList.remove('visible');
        girl2.classList.add('hidden');
      }

      if (girl) {
        girl.classList.remove('hidden');
        girl.classList.add('visible');
      }

      if (boy) {
        boy.classList.remove('visible');
        boy.classList.add('hidden');
      }

      if (hand) {
        hand.classList.remove('hidden');
        hand.classList.add('visible');
      }
    }
  }


  /* ===== Клик по девушке ===== */

  if (girl) {
    girl.addEventListener('click', changeScene);
  }


  /*
   * После появления girl_2 тоже можно кликнуть по сцене,
   * чтобы вернуть исходное состояние.
   */
  if (girl2) {
    girl2.addEventListener('click', changeScene);
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