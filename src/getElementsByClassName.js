/* exported getElementsByClassName */

const getElementsByClassName = (className) => {

  const elementsContainingClass = [];

  const findElementsContainingClass = function(element) {

    if (element.classList && element.classList.contains(className)) {
      elementsContainingClass.push(element);
    }
    if (element.childNodes) {
      element.childNodes.forEach((item) => {
        findElementsContainingClass(item);
      });
    }
  }

  findElementsContainingClass(document.body);

  return elementsContainingClass;
}

// function getElementsByClassName(className, node = document) {
//   let nodeArray = [];

//   if (node.classList && node.classList.contains(className)) {
//     nodeArray.push(node);
//   }
//   if (node.childNodes) {
//     node.childNodes.forEach((item) => {
//       nodeArray = nodeArray.concat(getElementsByClassName(className, item));
//     });
//   }
//   return nodeArray;
// }