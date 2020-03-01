/* exported getElementsByClassName */

const getElementsByClassName = target => {
  let targetNodes = [];

  const getElements = DOMstring => {

    // Base case
    if(DOMstring.childNodes.length === 0) {
      if(DOMstring.textContent !== ""){
        return;
      }else if(DOMstring.className.includes(target)){
        targetNodes.push(DOMstring);
        return;
      }else {
        return;
      }
    }

    // Recursive case
    if(DOMstring.className.includes(target)){
      targetNodes.push(DOMstring);
    }

    let node = DOMstring.lastChild;

    if(node !== null) getElements(node);
  }

  getElements(document.body);

  return targetNodes;
};