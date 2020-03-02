/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  let result = [];
  function traverse (node) {
    if (node.classList && node.classList.contains(className)) {
      result.push(node);
    }
    if (node.childNodes.length > 0) {
      for (let element of node.childNodes) {
        traverse (element);
      }    
    }
  }
  traverse(document.body);
  return result
};


