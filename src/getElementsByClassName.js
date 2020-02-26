/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  // YOUR CODE HERE
  let result = [];
  let body = document.body;//a container
  const findClass = (element)=>{
    if(element.classList && element.classList.contains(className)){
      result.push(element)
    }
  }
  function testNodes(node,test){
    test(node);
    node = node.firstChild;
    while(node){
      testNodes(node,test);
      node = node.nextSibling
    }
  }
  testNodes(body,findClass)
  return result;
};


