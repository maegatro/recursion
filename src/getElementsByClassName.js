const getElementsByClassName = (target) => {
  // YOUR CODE HERE
  let result = [];
  const recurse = (initialNode) => {
      //if it's classList contains className
      // console.log(initialNode);

    if (initialNode.classList !== undefined && initialNode.classList.contains(target)){
      result.push(initialNode);
    } 
    for (let i = 0; i < initialNode.childNodes.length; i++){
      let node = initialNode.childNodes[i];
      // console.log("node", node);
      recurse(node);
    }
  };
  recurse(document.body);
  return result;
};





      



