/* exported getElementsByClassName */

const getElementsByClassName = (className) => {
  let output = []
  let dom = document.documentElement
  
  let findClass = function(node){
    if (node.classList && node.classList.contains(className)){
      output.push(node)
    }
    if (node.childNodes){
      node.childNodes.forEach((element) => {
        findClass(element)
      })
    }
  }
  
  findClass(dom)
  return output
};
