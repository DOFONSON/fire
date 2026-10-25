document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const blur = document.getElementById("blur");
  if (!blur) return;

  // для поялвения через 3 секунды
  let blur_timer = null;
  const DELAY = 3000;

  // появление блюра
  function blurOn() {
    blur.classList.remove("hidden");
    blur.classList.add("visible");
  }

  // скрытие блюра
  function del_blur() {
    blur.classList.remove("visible");
    blur.classList.add("hidden");

    // удаление таймера
    if (blur_timer) {
      clearTimeout(blur_timer);
    }
    // запуск появления
    blur_timer = setTimeout(blurOn, DELAY);
  }

  blur.addEventListener("click", del_blur);
});
