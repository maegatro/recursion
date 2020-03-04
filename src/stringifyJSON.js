/* exported stringifyJSON */

const stringifyJSON = (value) => {
  
  //booleans, numbers strings
  if (typeof value === 'string'){
    return `"${value}"`;
  } else if (typeof value === 'boolean' || typeof value === 'number'){
    return `${value}`;
  } 
  if (value === null){
    return "null";
  }
  if (Array.isArray(value)){
    let inputArray = [];
    if (value.length === 0){
      return '[]';
    } else {
      for (const i of value){
        inputArray.push(stringifyJSON(i));
      }
    }
    return "[" + inputArray.toString() + "]";
  }
  //then arrays and objects
  //how to go through arrays and objects
  stringifyJSON(value);
};
