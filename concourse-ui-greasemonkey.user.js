// ==UserScript==
// @name      concourse-ui-greasemonkey
// @version   0.4
// @grant     none
// @namespace https://github.com/asadmanji-springer
// @author    asadmanji-springer
// @description Greasemonkey script to improve the useability / look and feel of the Concourse UI
// @match     https://concourse.halfpipe.io/*
// @run-at    document-end
// ==/UserScript==

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete" && document.getElementsByClassName("dashboard").length > 0) {
    clearInterval(readyStateCheckInterval);

    document.body.classList.toggle("compactSpacing");
    document.body.classList.toggle("solarisedDark");

    createToggleButtons();
    solarisedDarkTheme();
    hideCardFooter();
    compactCardSpacing();
  }
}, 10);

function createToggleButtons() {
	// create toggle button
  var spacingToggleBtn = document.createElement("BUTTON");
  spacingToggleBtn.setAttribute("class", "style-toggle");
  spacingToggleBtn.innerHTML = "Toggle Spacing";
  spacingToggleBtn.onclick = function() {
     document.body.classList.toggle("compactSpacing");
  };

  var styleToggleBtn = document.createElement("BUTTON");
  styleToggleBtn.setAttribute("class", "style-toggle");
  styleToggleBtn.innerHTML = "Toggle Theme";
  styleToggleBtn.onclick = function() {
     document.body.classList.toggle("solarisedDark");
  };

  // add to top nav
  document.styleSheets[0].insertRule('.style-toggle { border-width: 0 0 0 1px; border-color: rgb(61, 60, 60); color: white; background: rgb(30, 29, 29); cursor: pointer; }');
  var topNav = document.getElementById("top-bar-app");
  topNav.appendChild(spacingToggleBtn);
  topNav.appendChild(styleToggleBtn);
}

function solarisedDarkTheme() {
  document.styleSheets[0].insertRule('body.solarisedDark .pipeline-wrapper div.card-header { color: rgb(148, 162, 162) !important; }');

  document.styleSheets[0].insertRule('body.solarisedDark .pipeline-wrapper:nth-child(odd) div.card-header { background: rgb(1, 43, 54) !important; }');
  document.styleSheets[0].insertRule('body.solarisedDark .pipeline-wrapper:nth-child(odd) div.card-body { background: rgb(1, 43, 54) !important; }');

  document.styleSheets[0].insertRule('body.solarisedDark .pipeline-wrapper:nth-child(even) div.card-header { background: #083742 !important; }');
  document.styleSheets[0].insertRule('body.solarisedDark .pipeline-wrapper:nth-child(even) div.card-body { background: #083742 !important; }');
}

function hideCardFooter() {
  document.styleSheets[0].insertRule('body.compactSpacing div.card-footer { display: none !important; }');
}

function compactCardSpacing() {
  document.styleSheets[0].insertRule('body.compactSpacing div.banner { height: 2px !important; }');
  document.styleSheets[0].insertRule('body.compactSpacing div.card-header { padding: 10px !important; }');
  document.styleSheets[0].insertRule('body.compactSpacing .dashboard .pipeline-grid { padding: 10px 10px !important; width: auto !important; height: 25px !important; }');
  document.styleSheets[0].insertRule('body.compactSpacing div.card > div:first-child { margin: 10px 25px !important; } ');
}
