/* exported getElementsByClassName */

const getElementsByClassName = target => {
  let targetNodes = [];

  const getElements = DOMstring => {

    // console.log(DOMstring);

    // Base case
    // if(DOMstring.childNodes.length === 0 && DOMstring.className.includes(target)) {
    //   targetNodes.push(DOMstring);
    //   return;
    // }

    if(DOMstring.childNodes.length === 0) {
      // let textNode = DOMstring.textContent;
      // console.log(textNode);
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

  console.log(targetNodes);
  console.log("--------------------");

  return targetNodes;
};