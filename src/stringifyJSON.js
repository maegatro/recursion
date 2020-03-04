/* exported stringifyJSON */

const stringifyJSON = (value) => {

  if(typeof value === "number" || typeof value === "boolean" || value === null) {
    return `${value}`;
  } 
  
  if(typeof value === "string") {      
    return `"${value}"`;
  } 
  
  if (Array.isArray(value)) {
    let result = [];
    value.map(function (item) {
      result.push(stringifyJSON(item));
    });
    return "[" + result.join() + "]";
  } 
  
  if (typeof value === "object") {
    let result = [];
    for(let key in value) {
      let dataType = value[key];
      let stringifyValue = stringifyJSON(dataType);

      if(typeof stringifyValue !== "undefined") {
        result.push(`"${key}":${stringifyValue}`);
      }
    }
  return "{" + result.join(',') + "}";
  }
};
