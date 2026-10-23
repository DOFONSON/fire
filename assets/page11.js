
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const scene = document.getElementById("scene");
  const wrapper = document.getElementById("overflow-wrapper");

  if (!scene || !wrapper) return;

  // Исходные изображения листьев
  const leafSources = [
    "./assets/img/page-11/лист 1 1.png",
    "./assets/img/page-11/лист 1 2.png",
    "./assets/img/page-11/лист 2 2.png",
    "./assets/img/page-11/лист 2 3.png",
    "./assets/img/page-11/лист 4 1.png",
    "./assets/img/page-11/лист 4 2.png",
    "./assets/img/page-11/лист 4 3.png"
  ];

  const columns = 4;
  const rows = 6;
  const totalLeaves = 21;

  // Создаём листы поверх фона
  for (let i = 0; i < totalLeaves; i++) {
    const leaf = document.createElement("img");

    leaf.id = `oskolok_${i + 1}`;
    leaf.src = leafSources[i % leafSources.length];
    leaf.alt = "Лист";
    leaf.draggable = false;

    // Размер листа: от 25% до 38% ширины сцены
    const width = 25 + Math.random() * 13;
    leaf.style.width = `${width}%`;

    // Позиция в ячейке сетки
    const col = i % columns;
    const row = Math.floor(i / columns);

    const cellWidth = 100 / columns;
    const cellHeight = 100 / rows;

    const left =
      col * cellWidth +
      Math.random() * (cellWidth * 0.35);

    const top =
      row * cellHeight +
      Math.random() * (cellHeight * 0.3);

    leaf.style.left = `${Math.min(left, 100 - width * 0.5)}%`;
    leaf.style.top = `${Math.min(top, 94)}%`;

    // Случайный наклон для естественного расположения
    const rotation = Math.random() * 50 - 25;
    leaf.style.rotate = `${rotation}deg`;

    wrapper.appendChild(leaf);

    let isMoving = false;

    leaf.addEventListener("click", function (event) {
      event.stopPropagation();

      if (isMoving) return;
      isMoving = true;

      const leafRect = leaf.getBoundingClientRect();
      const sceneRect = scene.getBoundingClientRect();

      // Определяем, в какую сторону улетит лист
      const leafCenterX =
        leafRect.left + leafRect.width / 2;

      const sceneCenterX =
        sceneRect.left + sceneRect.width / 2;

      const direction =
        leafCenterX < sceneCenterX ? -1 : 1;

      // Расстояние за пределы сцены
      const distance =
        sceneRect.width + leafRect.width + 100;

      const randomRotation =
        (Math.random() - 0.5) * 70;

      leaf.classList.add("leaf-moving");

      leaf.style.transform =
        `translateX(${direction * distance}px) ` +
        `rotate(${randomRotation}deg)`;

      leaf.addEventListener(
        "transitionend",
        function handleTransitionEnd(e) {
          if (e.propertyName !== "transform") return;

          leaf.classList.add("leaf-gone");
          leaf.removeEventListener(
            "transitionend",
            handleTransitionEnd
          );
        }
      );
    });
  }
});
