var displayAllTabs = () => {
  let tabLinks = document.querySelectorAll('#tabLinks li a');
  let problemIds = Array.from(tabLinks).map(a => a.getAttribute('href'));
  problemIds.forEach(id => {
    let element = document.querySelector(id);
    element.style = null;
  });
};

var expandCodeBlock = () => {
  for (let e of document.querySelectorAll('.syntaxhighlighter')) {
    e.style.setProperty('max-height', 'none', 'important');
  }
};

var removeComments = () => {
  let comments = document.querySelectorAll('.commentBox');
  comments.forEach(e => e.remove());
};

var removeTopbar = () => {
  let logo = document.querySelector('.logocell');
  if (logo) { logo.remove(); }
};

var removeBottomTable = () => {
  let footer = document.getElementsByClassName('footer');
  if (footer[0]) { footer[0].remove(); }
};

var format = () => {
  displayAllTabs();
  expandCodeBlock();
  removeComments();
  removeTopbar();
  removeBottomTable();
};

chrome.runtime.onMessage.addListener(
  (request, sender) => {
    if (request.command === "format") { format(); }
  }
);
