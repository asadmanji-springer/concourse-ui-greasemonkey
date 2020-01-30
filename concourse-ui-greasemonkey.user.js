// ==UserScript==
// @name      concourse-ui-greasemonkey
// @version   0.1
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
    cssHacks();
    var cards = document.getElementsByClassName("card");
    cards.forEach(compactSpacing);
  }
}, 10);



function cssHacks() {
    document.styleSheets[0].insertRule('div.card-footer { display: none !important; }');
    document.styleSheets[0].insertRule('.dashboard .pipeline-grid { padding: 10px 10px !important; height: 20px !important; }');
}


function compactSpacing(item, index) {
  var childDiv = item.getElementsByTagName("div");
  console.log(childDiv);
  // childDiv.style.cssText = 'cursor:move; margin: 0px;';
}
