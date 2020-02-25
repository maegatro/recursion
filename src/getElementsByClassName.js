/* exported getElementsByClassName */

const getElementsByClassName = (targetClassName) => {
  let result = [];
  let body = document.body;

  function getElements(element) {
    if (
      element.classList &&
      element.classList.contains(targetClassName)
      ) {
      result.push(element);
    }
  };

  function traverse(element, test) {
    test(element);
    element = element.firstChild;
    while (element) {
      traverse(element, test);
      element = element.nextSibling;
    }
  }
    
  traverse(body, getElements);
  return result;
}