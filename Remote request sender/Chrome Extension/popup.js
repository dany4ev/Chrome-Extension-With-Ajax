'use strict';

var headingElem = document.getElementById('heading');

headingElem.onclick = function() {
    var message = headingElem.innerText;
    chrome.runtime.sendMessage({ "message": message });
};
