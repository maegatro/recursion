/* exported stringifyJSON */

const stringifyJSON = (a) => {

  console.log(a);
  console.log(Object.prototype.toString.call(a));

  // Base case
    // When input is a primitive data(i.e. boolean, numerical, null)
      // Just print that value

    // When input is an empty array or object???
      // Just print that value

  // Recursive case (When it is an object(nested, not empty)
  //or an array(nested with objects/nested with arrays))
};

/*
  1) undefined, Function and Symbols are not valid JSON values ---> converted to null
  2) all key properties are enclosed with double quotations
  3) if it is an array, add quotation marks to the entire array
*/