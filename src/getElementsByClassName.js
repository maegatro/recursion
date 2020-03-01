/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  let bodyHtml = document.body;
  let result = [];
  let hasClass = function(bodyHtml) {
    if (bodyHtml.classList && bodyHtml.classList.contains(className)) {
      result.push(bodyHtml);
    }
    if (bodyHtml.hasChildNodes()) {
      for (let i = 0; i < bodyHtml.childNodes.length; i++) {
        hasClass(bodyHtml.childNodes[i]);
      }
    }
  };
  hasClass(bodyHtml);
  return result;
};
