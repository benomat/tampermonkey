// ==UserScript==
// @name         Dynamic Linkvertise Bypass
// @homepageURL  https://discord.gg/gUMYGXqPPw
// @namespace    https://github.com/benomat/tampermonkey
// @version      1.0
// @description  Bypasses moonsec and many keysystems
// @author       benomat
// @supportURL   https://discord.gg/gUMYGXqPPw
// @match        https://linkvertise.com/*dynamic?r=*
// @icon         https://whimper.xyz/image.png
// @downloadURL https://raw.githubusercontent.com/benomat/tampermonkey/m/LVDynamic.user.js
// @updateURL https://raw.githubusercontent.com/benomat/tampermonkey/m/LVDynamic.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
    const urlPattern = /https:\/\/linkvertise\.com\/.*dynamic\?r=([^&]*)/;
    const match = currentUrl.match(urlPattern);
    if (match && match[1]) {
        const base64String = match[1];
        try {
            const decodedBase64 = decodeURIComponent(base64String);
            const decodedUrl = atob(decodedBase64);
            window.location.href = decodedUrl;
        } catch (e) {
            console.error('Failed to decode base64 string', e);
        }
    }
})();