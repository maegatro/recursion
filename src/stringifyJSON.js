/* exported stringifyJSON */

const stringifyJSON = (value) => {
  let output = '';
  const stringConverter = input => {
    if (typeof input === "number") {
      output += String(input);
    }
    if (typeof input === "boolean") {
      output += String(input);
    }
    if (input === null) {
      output += "null";
    }
    if (typeof input === "string") {
      output += (`"${input}"`);
    }
    if (typeof input === "function" || typeof input === undefined) {
      output += "null";
    }
    if (Array.isArray(input)){
      if (input.length === 0) {
        output += "[]";
        return;
      } else {
        for (let i = 0; i <input.length; i++){
          if (i === 0){
            output += "[";
            stringConverter(input[i])
          } else {
            output += ","
            stringConverter(input[i])
          }
        }
        output += "]";
        return;
      }
    };
    if (Object.prototype.toString.call(input) === "[object Object]"){     
      if((Object.keys(input).length === 0) || (input.hasOwnProperty("function")) || (input.hasOwnProperty("undefined"))){
        output += "{}"
        return;
      } else {
        output += "{";
        Object.keys(input).forEach((key, index) => {
          if (index !== 0) {
            output += ","
          }
            output += `"${key}":`
            stringConverter(input[key])
        });
      }
        output += "}"
        return;
    };         
  }    
  stringConverter(value);
  return output;
};