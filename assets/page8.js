/* ==========================================================================
   page8.js — анимация сцены страницы .

  При загрузке страницы рука со стаканом трясется.
  При нажатии и удержании курсора на кувшине его можно передвигать.
  При передвигании кувшина происходит наполнение стакана, если кувшин над ним.
  При наполнении стакана появляется струя. 
  ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const scene = document.getElementById("scene");
  const hand = document.getElementById("hand");
  const hand_above = document.getElementById("hand_above");
  const kuvshin = document.getElementById("kuvshin");
  const struia = document.getElementById("struia");
  const brendi = document.getElementById("brendi");

  // маска для бренди
  const brendi_wrapp = document.createElement("div");

  // дрожание
  if (hand && hand_above) {
    hand.classList.add("hand_shake");
    hand_above.classList.add("hand_shake");
  }
  if (brendi) {
    brendi.classList.add("hand_shake");
  }

  // Кувшин
  let is_dragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  // Нажатие на кувшин
  function onPointerDown(e) {
    if (e.button > 0) return;
    is_dragging = true;

    kuvshin.classList.remove("returning");
    kuvshin.classList.add("dragging");

    startX = e.clientX - currentX;
    startY = e.clientY - currentY;

    kuvshin.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  // Движение кувшином
  function onPointerMove(e) {
    if (!is_dragging) return;

    currentX = e.clientX - startX;
    currentY = e.clientY - startY;

    kuvshin.style.setProperty("--x", currentX + "px");
    kuvshin.style.setProperty("--y", currentY + "px");

    // для появлении струи
    updateStruia();
  }

  //
  function onPointerUp(e) {
    if (!is_dragging) return;
    is_dragging = false;

    kuvshin.classList.remove("dragging");
    kuvshin.classList.add("returning");

    currentX = 0;
    currentY = 0;

    kuvshin.style.setProperty("--x", "0px");
    kuvshin.style.setProperty("--y", "0px");

    if (kuvshin.hasPointerCapture(e.pointerId)) {
      kuvshin.releasePointerCapture(e.pointerId);
    }

    // для появлении струи
    updateStruia();
  }

  kuvshin.addEventListener("pointerdown", onPointerDown);
  kuvshin.addEventListener("pointermove", onPointerMove);
  kuvshin.addEventListener("pointerup", onPointerUp);
  kuvshin.addEventListener("pointercancel", onPointerUp);

  // Струя
  // координаты носика
  const SPOUT = { x: 0.03, y: 0.39 };

  // диапозон появления струи
  const ZONE_PAD_X = -90;
  const ZONE_PAD_Y = 5;

  let is_pouring = false;

  // получение координат со сцены
  function getSpoutPoint() {
    const r = kuvshin.getBoundingClientRect();
    // вращение вокруг центра
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    // вектор носика кувшина
    const lx = (SPOUT.x - 0.5) * r.width;
    const ly = (SPOUT.y - 0.5) * r.height;

    // поворот
    const angle = (-56.38 * Math.PI) / 180;

    // поворот вектора
    const rx = lx * Math.cos(angle) - ly * Math.sin(angle);
    const ry = lx * Math.sin(angle) + ly * Math.cos(angle);

    return { x: cx + rx, y: cy + ry };
  }

  // носик кувшина над стаканом
  function isOverGlass(pt) {
    const g = hand_above.getBoundingClientRect();
    return (
      pt.x >= g.left - ZONE_PAD_X - 15 &&
      pt.x <= g.right + ZONE_PAD_X - 15 &&
      pt.y >= g.top - ZONE_PAD_Y &&
      pt.y <= g.bottom + ZONE_PAD_Y
    );
  }

  function updateStruia() {
    // есть ли передвижение кувшина
    if (!is_dragging) {
      if (is_pouring) {
        is_pouring = false;
        struia.classList.remove("str_visib");
        // остановка заполнения стакана
        stopFilling();
      }
      return;
    }
    // носик кувшина
    const pt = getSpoutPoint();
    const over_glass = isOverGlass(pt);

    if (over_glass) {
      // струя над стаканом
      if (!is_pouring) {
        is_pouring = true;
        struia.classList.add("str_visib");
        // заполнение стакана
        startFilling();
      }

      const scene_rect = scene.getBoundingClientRect();
      const struia_width = scene_rect.width * 0.6;

      // смещение для струи
      const VISUAL_CENTER_OFFSET = 0.51;
      const TOP_OFFSET = 430;

      // струя под носиком
      const left_pos = pt.x - struia_width * VISUAL_CENTER_OFFSET;
      // струя по x y
      struia.style.left = left_pos + "px";
      struia.style.top = pt.y - TOP_OFFSET + "px";
    } else {
      // носик вне стакана
      if (is_pouring) {
        is_pouring = false;
        struia.classList.remove("str_visib");
        // остановка заполнения стакана
        stopFilling();
      }
    }
  }

  // Бренди
  // скорость - 3 секунды
  const FILL_SPEED = 100 / 3;
  // уровень жидкости
  let fill_level = 0;
  let last_fill_time = 0;
  // флаг для анимации
  let fill_raf_id = null;

  // заполнение
  function startFilling() {
    if (fill_raf_id !== null) {
      return;
    }
    last_fill_time = performance.now();
    tickFill();
  }

  // остановка наполнения
  function stopFilling() {
    if (fill_raf_id !== null) {
      cancelAnimationFrame(fill_raf_id);
      fill_raf_id = null;
    }
  }

  // кадр для наполнения
  function tickFill() {
    // секунды сейчас
    const now = performance.now();
    // секунды с прошлого кадра
    const dt = (now - last_fill_time) / 1000;
    last_fill_time = now;

    // новый уровень жидкости
    fill_level = Math.min(100, fill_level + FILL_SPEED * dt);
    brendi.style.setProperty("--fill", fill_level + "%");

    if (fill_level >= 100) {
      // стакан полон
      stopFilling();
      return;
    }
    fill_raf_id = requestAnimationFrame(tickFill);
  }
});
