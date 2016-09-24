formatCurrentTab = () => {
  chrome.tabs.query({active: true, currentWindow: true},
    tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {command: "format"});
    }
  );
};

var contextMenuId = chrome.contextMenus.create({
  "title": "Printable", 
  "contexts": ["page"],
  "documentUrlPatterns": ["*://apps.topcoder.com/*"],
  "onclick": formatCurrentTab
});
