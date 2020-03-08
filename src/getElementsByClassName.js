/* exported getElementsByClassName */

const getElementsByClassName = (name) => {
  const outcome = [];

  const searchForClassName = (elements) => {
    if (elements.children === undefined) return;
    if (elements.classList && elements.classList.contains(name)) {
      outcome.push(elements);
    }

    for (let element of elements.children) {
      searchForClassName(element);
    }
  };
  searchForClassName(document);
  return outcome;
};
