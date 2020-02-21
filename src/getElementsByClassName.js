/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  let elements = [];

  function findElements(node) {
    //base
    if (node.classList && node.classList.contains(className)) {
      elements.push(node);
    }
    //recursive
    node.childNodes.forEach((element) => {
      findElements(element);
    });
  }

  findElements(document.body);
  return elements;
};
