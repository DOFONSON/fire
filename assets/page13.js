document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const scene = document.getElementById("scene");

  if (!scene) return;

  // Порядок появления элементов
  const sequence = [
    document.getElementById("vily"),
    document.getElementById("guns"),
    document.getElementById("torch_front"),
    document.getElementById("torches")
  ];

  // Удаляем отсутствующие элементы, если они не найдены
  const elements = sequence.filter(Boolean);

  let currentIndex = 0;

  scene.addEventListener("click", function () {
    // Все элементы уже показаны
    if (currentIndex >= elements.length) return;

    // Показываем следующий элемент
    elements[currentIndex].classList.add("visible");

    currentIndex++;
  });
});