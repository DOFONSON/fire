document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ===== Лисий хвост ===== */

  var foxTail = document.getElementById('Fox_tail');
  var foxTail2 = document.getElementById('Fox_tail2');

  if (foxTail && foxTail2) {
    foxTail.classList.add('fox-tail-visible');
    foxTail2.classList.add('fox-tail-hidden');

    foxTail.classList.add('fox-tail-animation');
    foxTail2.classList.add('fox-tail-animation');
  }

  /* ===== Глаза совы ===== */

  var owlEyesClosed = document.getElementById('OwlEyesClosed');
  var owlEyesOpened = document.getElementById('OwlEyesOpened');

  if (owlEyesClosed && owlEyesOpened) {
    owlEyesClosed.classList.add('owl-eyes-visible');
    owlEyesOpened.classList.add('owl-eyes-hidden');

    owlEyesClosed.classList.add('owl-eyes-animation');
    owlEyesOpened.classList.add('owl-eyes-animation');
  }
});
