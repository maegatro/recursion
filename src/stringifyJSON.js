/* exported stringifyJSON */

const stringifyJSON = (value) => {
  let output = '';

  const stringMachine = input => {
    
    if (typeof input === "number") output += String(input);
    if (typeof input === "boolean") output += String(input);
    if (input === null) output += null;
    if (typeof input === "string") output += (`"${input}"`);
    if (typeof input === "function" || typeof input === undefined) output += null;
    if (Array.isArray(input)){
      if (input.length === 0) {
        output += "[]";
        return;
      } else {
        for (let i = 0; i <input.length; i++){
          if (i === 0){
            output += "[";
            stringMachine(input[i])
          } else {
            output += ","
            stringMachine(input[i])
          }
        }
        output += "]";
        return;
      }
    }
    if (typeof input === "object"){      
      if(Object.keys(value).length === 0){
        output += "{}"
      } else {
        output += "{";
        for(let keys in input){
          output += `"${keys}":`
          stringMachine(input[keys])
        }
        output += "}"
      }
    }         

  }  
  
  stringMachine(value);
  return output;
};
