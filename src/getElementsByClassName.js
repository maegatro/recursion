/* exported getElementsByClassName */

const getElementsByClassName = (name) => {
  const output = [];

  const searchForClassName = (elements) => {
    if (elements.children === undefined) return;
    if (elements.classList && elements.classList.contains(name)){
      output.push(elements);
    };

    for (let element of elements.children){
      searchForClassName(element);
    };
  }
  searchForClassName(document);
  return output;
};
