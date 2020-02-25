/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  // YOUR CODE HERE
  const result = [];
  const searchInsideNode = (nodeObj) =>{
    if(nodeObj.classList !== undefined && nodeObj.classList.contains(className)){
      result.push(nodeObj);
    }
    if(nodeObj.childNodes.length>0){
      for (const element of nodeObj.childNodes){
        searchInsideNode(element);
      }
    }
  }
  searchInsideNode(document);
  return result;
};
