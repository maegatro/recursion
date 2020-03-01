/* exported getElementsByClassName */

const getElementsByClassName = (target) => {
  let output = []

  const getElementPerNode = (el) => {
    if (el.classList && el.classList.contains(target)) {
      output.push(el)
    }
    if(el.childNodes) {
      el.childNodes.forEach(item => {
        getElementPerNode(item);
      });
    }
  }

  getElementPerNode(document.body)
  
  return output
};

