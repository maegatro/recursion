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
  //convert date to string for mia
  if (Object.prototype.toString.call(value) === "[object Date]"){
    return `"${value.toISOString()}"`;
  }
  //if value is array check for length
  if (Array.isArray(value)){
    let inputArray = [];
    if (value.length === 0){
      return '[]';
    } else {
      for (const i of value){
        //check for bad values and skip over them with continue
        //continue is like the most amazing thing I've found ever
        if (i === undefined || typeof i === 'function'){
          continue;
        }
        inputArray.push(stringifyJSON(i));
      }
    }
    return `[${inputArray.toString()}]`;
  }
  //check value is object with prototype.toString.call
  if (Object.prototype.toString.call(value) === '[object Object]'){
    let inputObj = [];
    //check for length again
    if (Object.keys(value).length === 0){
      return '{}';
    } else {
      for (const l in value){
        //check for bad values and skip them with continue
        if (value[l] === undefined || typeof value[l] === 'function'){
          continue;
        }
        //stringify both the key and the value
        inputObj.push(`${stringifyJSON(l)}:${stringifyJSON(value[l])}`)
      }
    }
    return `{${inputObj.toString()}}`;
  }
  stringifyJSON(value);
};
