// ==UserScript==
// @name      concourse-ui-greasemonkey
// @version   0.2
// @grant     none
// @namespace https://github.com/asadmanji-springer
// @author    asadmanji-springer
// @description Greasemonkey script to improve the useability / look and feel of the Concourse UI
// @match     https://concourse.halfpipe.io/*
// @run-at    document-end
// ==/UserScript==

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    console.log("Monitor mode is go");

    hideCardFooter();
    compactCardSpacing();
  }
}, 10);



function hideCardFooter() {
  document.styleSheets[0].insertRule('div.card-footer { display: none !important; }');
}

function compactCardSpacing() {
  document.styleSheets[0].insertRule('.dashboard .pipeline-grid { padding: 10px 10px !important; height: 20px !important; }');
  document.styleSheets[0].insertRule('div.card > div:first-child { margin: 10px 20px !important; } ');
}
