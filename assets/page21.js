
document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const blood = document.getElementById("blood");

    const hand1 = document.getElementById("hand-1");
    const hand2 = document.getElementById("hand-2");
    const hand3 = document.getElementById("hand-3");

    if (!blood || !hand1 || !hand2 || !hand3) {
        return;
    }

    // Задержки анимации
    const BLOOD_DELAY = 3000;
    const HANDS_DELAY = 5000;
    const HAND_INTERVAL = 1500;


    hand1.classList.add("hidden");
    hand2.classList.add("hidden");
    hand3.classList.add("hidden");

    // Плавное проявление крови
    setTimeout(function () {
        blood.classList.remove("hidden");
        blood.classList.add("visible");
    }, BLOOD_DELAY);

    // Первая рука
    setTimeout(function () {
        hand1.classList.remove("hidden");
        hand1.classList.add("visible");
    }, HANDS_DELAY);

    // Вторая рука
    setTimeout(function () {
        hand2.classList.remove("hidden");
        hand2.classList.add("visible");
    }, HANDS_DELAY + HAND_INTERVAL);

    // Третья рука
    setTimeout(function () {
        hand3.classList.remove("hidden");
        hand3.classList.add("visible");
    }, HANDS_DELAY + HAND_INTERVAL * 2);
});
