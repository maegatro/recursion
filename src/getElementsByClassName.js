/* exported getElementsByClassName */

const getElementsByClassName = (targetClassName) => {
  let result = [];
  let targetElement = document;

  const getElement = (targetElement) =>{
      
    for(let i = 0; i < targetElement.children.length; i++){
      if(targetElement.children[i].className.indexOf(targetClassName) > -1){
        result.push(targetElement.children[i]);
      }
      if(targetElement.children[i].children.length){
        getElement(targetElement.children[i]);
      }		
    }
  }
  getElement(targetElement);
  console.log(result);
  return result;
  };