/* exported getElementsByClassName */

const getElementsByClassName = target => {
  let targetNodes = [];
  let output = [];

  const getElements = DOMstring => {

  // Base case
  if(DOMstring.childNodes.length === 0){
    return;
  }



  // Recursive case
    let node = DOMstring.lastChild;

    if(node.className.includes(target)){
      targetNodes.push(node);
    }

    // console.log(`Check ${node.className.includes(target)}`);
    // console.log(node);

    // targetNodes.push(node);

    getElements(node);
  }

  getElements(document.body);

  // return targetNodes;
  console.log(targetNodes);
};

/*
  Document.body
    p
    div
      div className = testing
    /div

*/
