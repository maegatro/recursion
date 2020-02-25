/* exported getElementsByClassName */

// The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
// A descendant can be a child, grandchild, great-grandchild, and so on.


const getElementsByClassName = (className,node) => {
  // YOUR CODE HERE
  let results = [];

  if(!node){
    node = document.body;
  } else {
    node = node;
  }

  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }

  let children = node.childNodes;

  if (children) {

    for (let i = 0; i < children.length; i++) {

      let child = children[i];

      results = results.concat(getElementsByClassName(className, child));
    }
  }

  return results;
};
