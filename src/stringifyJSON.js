/* exported stringifyJSON */

const stringifyJSON = (value) => {
  // YOUR CODE HERE
  if(typeof value === 'number' || typeof value === 'boolean' || value === null){
    return `${value}`;
  } else if(value instanceof Date){
    let date = value.toISOString();
    return `"${date}"`
  } else if(typeof value === 'string'){
    return `"${value}"`
  } else if(Array.isArray(value)){
    let result = value.map(e => stringifyJSON(e));
    return "[" + result.join() + "]";
  } else if (typeof value === 'object'){
    let result = [];
    for(let key in value){
      let resultValue = stringifyJSON(value[key]);
      if(typeof resultValue !== "undefined"){
        result.push(`"${key}":${stringifyJSON(value[key])}`);
      }
    }
    return "{" + result.join() + "}"; 
  }
};
