chrome.tabs.onUpdated.addListener(function checkForValidUrl(tabId, changeInfo, tab) {
    if (tab.url.indexOf('secureshop-test.firstdata.lv/ecomm/ClientHandler') > -1) {
          chrome.pageAction.show(tabId);
    }
});
