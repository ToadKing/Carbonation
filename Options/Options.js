function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        blacklist: document.querySelector('#blacklist').value,
        quotestyle: document.querySelector('#quotestyle').checked,
        filterme: document.querySelector('#filterme').checked,
        quickpoststyletags: document.querySelector('#quickpoststyletags').checked
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector('#blacklist').value = result.blacklist;
        document.querySelector('#quotestyle').checked = result.quotestyle;
        document.querySelector('#filterme').checked = result.filterme;
        document.querySelector('#quickpoststyletags').checked = result.quickpoststyletags;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get({
        blacklist: 'Comma separated list goes here',
        quotestyle: false,
        filterme: false,
        quickpoststyletags: false
    });
    getting.then(setCurrentChoice, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);