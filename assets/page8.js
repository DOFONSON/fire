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

  // дожание
  if (hand && hand_above) {
    hand.classList.add("hand_shake");
    hand_above.classList.add("hand_shake");
  }
  if (brendi) {
    brendi.classList.add("hand_shake");
  }
});
