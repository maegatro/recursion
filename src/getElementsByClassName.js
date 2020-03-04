/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  
  let elementsWithClassName = [];

  function findElementsWithClassNames (node) {
    
    if(node.classList !== undefined && node.classList.contains(className)) {
      elementsWithClassName.push(node);
    }

    if(node.childNodes.length > 0) {   
      for(let prop of node.childNodes) {
        findElementsWithClassNames(prop);
      }
    }
  }

  findElementsWithClassNames(document.body);

  return elementsWithClassName;

};
