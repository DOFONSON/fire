document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  //   Изменяющиеся элементы сцены
  let scene = document.getElementById("scene");
  let oskolki = document.querySelectorAll("img[id^='oskolok']");

  let oskolki_arr = [];
  let click_count = 0;

  // Направление от центра экрана
  function directions() {
    // Центр сцены
    let scene_rect = scene.getBoundingClientRect();
    let centerX = scene_rect.width / 2;
    let centerY = scene_rect.height / 2;

    for (let i = 0; i < oskolki.length; i++) {
      let ice = oskolki[i];
      let rect = ice.getBoundingClientRect();

      // Центр осколка относительно сцены
      let ice_centX = rect.left - scene_rect.left + rect.width / 2;
      let ice_centY = rect.top - scene_rect.top + rect.height / 2;

      // Направления от центра к осколку
      let dirX = ice_centX - centerX;
      let dirY = ice_centY - centerY;

      // Одинаковая скорость для всех осколков
      let length = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

      // Данные по осколку
      oskolki_arr.push({
        element: ice,
        dirX: dirX / length,
        dirY: dirY / length,
      });
    }
  }
  directions();

  // Трещины
  function crack() {
    // Насколько далеко расходятся при клике
    let intens = click_count * 0.8;

    for (let i = 0; i < oskolki_arr.length; i++) {
      let data = oskolki_arr[i];
      let el = data.element;

      el.classList.add("crack-phase");

      // Смещение от центра
      let moveX = Math.round(data.dirX * intens);
      let moveY = Math.round(data.dirY * intens);

      el.style.setProperty("--tx", moveX + "px");
      el.style.setProperty("--ty", moveY + "px");
    }
  }

  // Разлет в разные стороны
  function spread() {
    for (let i = 0; i < oskolki_arr.length; i++) {
      let data = oskolki_arr[i];
      let el = data.element;

      el.classList.remove("crack-phase");
      el.classList.add("explode-phase");

      let fly_dist = 1000;

      // Вылет за края сцены
      let moveX = Math.round(data.dirX * fly_dist);
      let moveY = Math.round(data.dirY * fly_dist);
      let rotate = (Math.random() - 0.5) * 90;

      el.style.setProperty("--tx", moveX + "px");
      el.style.setProperty("--ty", moveY + "px");
      el.style.setProperty("--rot", rotate + "deg");
    }
  }

  // 3. Обработчик кликов
  function handleSceneClick() {
    click_count++;

    if (click_count <= 4) {
      crack();
    } else if (click_count === 5) {
      spread();
      scene.style.pointerEvents = "none";
    }
  }

  scene.addEventListener("click", handleSceneClick);
});
