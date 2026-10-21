/* ==========================================================================
   page5.js — интерактивная сцена страницы 5.

   Логика:
   - при клике на закрытые ставни они открываются;
   - свет и тень постоянно мигают с разной частотой.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ===== Элементы сцены ===== */

  var closed = document.getElementById('closed');
  var opened = document.getElementById('opened');
  var light = document.getElementById('light');
  var shadow = document.getElementById('shadow');


  /* ===== Состояние ставней ===== */

  var shuttersOpened = false;


  /* ==========================================================================
     Ставни
     ========================================================================== */

  if (closed && opened) {
    /* Изначально ставни закрыты */

    opened.classList.add('shutters-hidden');


    /* Клик по закрытым ставням */

    closed.addEventListener('click', function () {
      if (shuttersOpened) {
        return;
      }

      shuttersOpened = true;

      closed.classList.add('shutters-close');
      opened.classList.remove('shutters-hidden');
      opened.classList.add('shutters-open');
    });
  }


  /* ==========================================================================
     Свет
     ========================================================================== */

  if (light) {
    light.classList.add('light-blink');
  }


  /* ==========================================================================
     Тень
     ========================================================================== */

  if (shadow) {
    shadow.classList.add('shadow-blink');
  }
});