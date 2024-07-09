// ==UserScript==
// @name         Wave Bypasser
// @homepageURL  https://discord.gg/gUMYGXqPPw
// @namespace    https://raw.githubusercontent.com/benomat/tampermonkey/m/WaveBypass.user.js
// @version      1.0
// @description  Bypass wave keys like a charm
// @author       benomat
// @supportURL   https://discord.gg/gUMYGXqPPw
// @icon         https://whimper.xyz/image.png
// @downloadURL https://raw.githubusercontent.com/benomat/tampermonkey/m/WaveBypass.user.js
// @updateURL https://raw.githubusercontent.com/benomat/tampermonkey/m/WaveBypass.user.js
// @match        https://key.getwave.gg/*
// @match        https://lootdest.com/s?da8a5a9c*
// @match        https://loot-link.com/s?a71a5892*
// @match        https://linkvertise.com/1200269/*
// @match        https://lootdest.com/s?15e1e695*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.href.startsWith("https://key.getwave.gg/")) {
        function clickOnCursorPointer() {
            const elements = document.querySelectorAll('.cursor-pointer');
            elements.forEach(element => {
                element.click();
            });
        }
        setTimeout(clickOnCursorPointer, 2500);
    }
    else if (window.location.href.startsWith("https://lootdest.com/s?da8a5a9c") ||
             window.location.href.startsWith("https://loot-link.com/s?a71a5892") ||
             window.location.href.startsWith("https://linkvertise.com/1200269") ||
             window.location.href.startsWith("https://lootdest.com/s?15e1e695")) {
        setTimeout(function() {
            window.location.href = "https://key.getwave.gg/freemium-tasks";
        }, 10000);
    }
})();

