const tabHistory = [];

function getTabName(id, fn) {
  return chrome.tabs.get(id, fn);
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });

  chrome.tabs.onActivated.addListener(function(tab) {
    //$('body').append('hi');
    console.log(tab);
    getTabName(tab.tabId, function(tab) {

      tabHistory.push(tab.title);

      chrome.storage.sync.set({pavTabs: JSON.stringify(tabHistory)}, function() {
        console.log('The color is green.');
      });
    });
  });

});
