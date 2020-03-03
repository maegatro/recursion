/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  
  elementsWithClassName = [];

  function findElementsWithClassNames (node) {
    
    if(node.classList !== undefined && node.classList.contains(className)) {
      elementsWithClassName.push(node);
    }

    if(node.childNodes.length > 0) {   // recursion case
      for(let prop of node.childNodes) {
        findElementsWithClassNames(prop);
      }
    }
    
    // case exits when it reaches the end of the stack
  }

  findElementsWithClassNames(document.body);

  return elementsWithClassName;

};
