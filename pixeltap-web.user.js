// ==UserScript==
// @grant        none
// @version      1.0
// @author       mudachyo
// @name         PixelTap web
// @description  21.06.2024, 21:31:29
// @match        *://sexyzbot.pxlvrs.io/*
// @homepage     https://github.com/miladrezanezhad/pixleTap
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8fIh36hOYyMEv7XiDsX0EMOP2MC18Trptg&s
// @downloadURL  https://github.com/miladrezanezhad/pixleTap/raw/main/pixeltap-web.user.js
// @updateURL    https://github.com/miladrezanezhad/pixleTap/raw/main/pixeltap-web.user.js
// ==/UserScript==


(function() {
    'use strict';

    // Function to replace script URL
    function replaceScriptUrl() {
        // List of URLs to replace
        const urlsToReplace = [
            'https://telegram.org/js/telegram-web-app.js'
        ];
        const newUrl = 'https://ktnff.tech/hamsterkombat/telegram-web-app.js';

        // Getting all <script> tags on the page
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            // Checking if src contains one of the replacement URLs
            if (urlsToReplace.includes(script.src)) {
                // Create a new <script> tag with a new URL
                const newScript = document.createElement('script');
                newScript.src = newUrl;
                newScript.type = 'text/javascript';

                // Replace the old tag with a new one
                script.parentNode.replaceChild(newScript, script);
                console.log('Script URL replaced:', newScript.src);
            }
        }
    }

    // DOM Change Observer
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                replaceScriptUrl();
            }
        });
    });

    // Observer Settings
    const config = {
        childList: true,
        subtree: true
    };

    // Let's start monitoring changes in the DOM
    observer.observe(document.body, config);

    // Initial run of URL replacement
    replaceScriptUrl();
})();
