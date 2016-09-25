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

var formatEditorial = () => {
  displayAllTabs();
  expandCodeBlock();
  removeComments();
  removeTopbar();
  removeBottomTable();
};

var setMainContent = () => {
  let content = document.getElementsByClassName("problemText")[0];
  if (content && content.innerHTML) {
    document.body.innerHTML = content.innerHTML;
  }
};

var setTextColor = () => {
  let elements = Array.from(document.getElementsByClassName("statText"));
  elements.forEach(e => e.style.setProperty("color", "black", "important"));
};

var formatProblem = () => {
  setMainContent();
  setTextColor();
};

chrome.runtime.onMessage.addListener(
  (request, sender) => {
    if (request.pageType === "editorial") { formatEditorial(); }
    else if (request.pageType === "problem") { formatProblem(); }
  }
);
