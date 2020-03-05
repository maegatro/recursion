const getElementsByClassName = (target) => {
  // YOUR CODE HERE
  let result = [];
  let initialNode = document.body;
  const recurse = (initialNode) => {
    if (initialNode.classList !== undefined && initialNode.classList.contains(target)){
      result.push(initialNode);
      // console.log(result);
    } 
    for (let i = 0; i < initialNode.childNodes.length; i++){
      let newNode = initialNode.childNodes[i];
      recurse(newNode);
    }
  };
  recurse(initialNode);
  return result;
};





      



