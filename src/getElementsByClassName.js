/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  // YOUR CODE HERE
  let result = [];
  let searchElements = (elements) => {
    if(elements.classList && elements.classList.contains(className)){
      result.push(elements);
    };
    if(elements.childNodes){
      elements.childNodes.forEach(e => {
        searchElements(e);
      })
    }
  };
  searchElements(document.body);
  return result;
};
