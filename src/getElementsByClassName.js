/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  let elementWithClassName = [];

  function findElementWithClassName(element) {
    if (
      element.classList !== undefined &&
      element.classList.contains(className)
    ) {
      elementWithClassName.push(element);
    }
    if (element.childElement.length > 0) {
      for (let prop of element.childElement) {
        findElementWithClassName(prop);
      }
    }
  }
  findElementWithClassName(document.body);

  return elementWithClassName;
};
