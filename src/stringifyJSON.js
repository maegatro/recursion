/* exported stringifyJSON */

const stringifyJSON = (input) => {
  let result = "";
  let dataType = "";
  let counter = 0;
  let valLength = 0;
  let isObject = false;
  let isArray = false;
  let isPrimitive = ["[object Number]", "[object Boolean]", "[object Null]"];

  const covertToString = (val) => {
    let dataType = Object.prototype.toString.call(val);

    if(dataType === "[object Array]") {
      valLength = val.length;
      isArray = true;
    }

    if(dataType === "[object Object]") {
      valLength = Object.keys(val).length;
      isObject = true;
    }

    // Base case
    if(isPrimitive.includes(dataType)){
      if(typeof val === "number" && !isObject || !isArray){
        result = `${val}`;
        return;
      }

      if(typeof val === "number" && valLength !== 0){
        result = `${val},`;
      }else if(typeof val === "number" && valLength === counter){
        result = `${val}`;
        return;
      }
    }else if(dataType === "[object String]") {
      result +=  `"${val}"`;
      return;
    }else {
      // Base case for object and arrays
      if(isObject && valLength === 0){
          result += `{}`;
          return;
      } else if(isArray && valLength === 0){
          result += `[]`;
          return;
      }
    }

    //Recursive case
    for(el in val){
      counter = counter + 1;
      covertToString(val[el]);
    }
  }

  covertToString(input);

  // Enclose the entire string with either curly braces or brackets
  if(isObject && valLength !== 0){
    result = `{${result}}`;
  }

  if(isArray && valLength !== 0){
    result = `[${result}]`;
  }
  return result;
};

  // Base case
    // When input is a primitive data(i.e. boolean, numerical, null)
      // Just print that value

    // When input is an empty array or object???
      // Just print that value

  // Recursive case (When it is an object(nested, not empty)
  //or an array(nested with objects/nested with arrays))

/*
  1) undefined, Function and Symbols are not valid JSON values ---> converted to null
  2) all key properties are enclosed with double quotations
  3) if it is an array, add quotation marks to the entire array
*/