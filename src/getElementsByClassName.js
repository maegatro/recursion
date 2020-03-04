/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  let result = [];
  let node = document.body;
  //exit case here
  const checkForClass = (node) => {
    if (node.classList && node.classList.contains(className)){
      result.push(node);
    }
    //recursive case here
    for (let i = 0; i < node.childNodes.length; i++){
      checkForClass(node.childNodes[i]);
    }
  }
  checkForClass(node);
  return result;
};
