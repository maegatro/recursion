/* exported stringifyJSON */

const stringifyJSON = (value) => {
  let result = "";
  //booleans, numbers strings
  if (typeof value === 'string'){
    return `"${value}"`;
  } else if (typeof value === 'boolean' || typeof value === 'number'){
    return `${value}`;
  } 
  //then arrays and objects
  //how to go through arrays and objects
  stringifyJSON(value);
  return result;
};
