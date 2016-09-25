var formatCurrentTab = (command) => {
  return (event) => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      if (tabs[0]) { chrome.tabs.sendMessage(tabs[0].id, command); }
    });
  };
};

var printEditorialId = chrome.contextMenus.create({
  "title": "Printable Editorial", 
  "contexts": ["page"],
  "documentUrlPatterns": [
    "*://apps.topcoder.com/*",
  ],
  "onclick": formatCurrentTab({ pageType: "editorial" })
});

var printProblemId = chrome.contextMenus.create({
  "title": "Printable Problem", 
  "contexts": ["page"],
  "documentUrlPatterns": [
    "*://community.topcoder.com/*problem_statement*"
  ],
  "onclick": formatCurrentTab({ pageType: "problem" })
});
