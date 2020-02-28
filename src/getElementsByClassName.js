/* exported getElementsByClassName */

const getElementsByClassName = target => {
  let targetNodes = [];

  const getElements = DOMstring => {

    console.log(DOMstring);

    // Base case
    if(DOMstring.lastChild === null){
      return;
    }

    // Recursive case
    if(DOMstring.className.includes(target)){
      targetNodes.push(DOMstring);

    }
    let node = DOMstring.lastChild;
    getElements(node);
  }

  getElements(document.body);

  console.log(targetNodes);
  console.log("--------------------");
  return targetNodes;
};