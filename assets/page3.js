/* ==========================================================================
   page3.js — интерактивная сцена страницы 3.

   Логика:
   - изначально показывается первая сцена;
   - при клике на отца сцена переключается на вторую;
   - вторая сцена находится точно в том же месте;
   - отец наклоняется к сыну, а сын смотрит на отца.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ===== Элементы сцены ===== */

  var firstScene = document.getElementById('ChldSon2');
  var secondScene = document.getElementById('ChldSon');

  /* ===== Состояние сцены ===== */

  var changed = false;

  /* ===== Переключение сцены ===== */

  function changeScene() {
    if (!firstScene || !secondScene) {
      return;
    }

    changed = !changed;

    if (changed) {
      firstScene.classList.add('scene-hidden');
      secondScene.classList.add('scene-visible');
    } else {
      firstScene.classList.remove('scene-hidden');
      secondScene.classList.remove('scene-visible');
    }
  }

  /* ===== Клик по первой сцене ===== */

  if (firstScene) {
    firstScene.addEventListener('click', changeScene);
  }

  /* ===== Клик по второй сцене ===== */

  if (secondScene) {
    secondScene.addEventListener('click', changeScene);
  }
});
