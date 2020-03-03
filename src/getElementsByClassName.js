/* exported getElementsByClassName */

const getElementsByClassName = (targetClass) => {
  const result = [];
  
  function findTarget(element, collection) {
    const childrenCount = element.children.length;
    const children = element.children;
  
    if (element.classList.contains(targetClass)) {
      result.push(element);
    }
    if (childrenCount === 0) return;
    for (let i = 0; i < childrenCount; i++){
      findTarget(children[i], collection.concat(children[i]));
    }
  }

  findTarget(document.body, [])
  return result;
};
