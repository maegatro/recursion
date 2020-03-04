/* exported getElementsByClassName */

const getElementsByClassName = (className, DOMElement = document.body) => {
  let result = [];

  const investigateNode = (node) => {
    //Exit
    if (node.classList !== undefined && node.classList.contains(className)){
      result.push(node);
    }

    //Recursive
    if (node.childNodes.length > 0) {
      for (let value of node.childNodes) {
        investigateNode(value)
      }
    }
  }
  investigateNode(DOMElement);
  return result;
};