/* exported stringifyJSON */

const stringifyJSON = (nonString) => {
  if(nonString === null ) {
    return 'null'
  }
  
  // The next if will seperate 0-length arrays from 0-length objects and return the appropriate values
  if (Array.isArray(nonString) && nonString.length === 0) {
    return "[]"
  }
  else if (typeof(nonString) === 'object' && Object.keys(nonString).length === 0) {
    return "{}"
  }
  
  
  //The next if will seperate non-0-length arrays from non-0-length objects and return the appropriate values
  if (Array.isArray(nonString)  && nonString.length > 0 ) {
    let nonStringArray =[] 
    for (let el of nonString) {
      nonStringArray.push(stringifyJSON(el))
    }
    return "[" + nonStringArray + "]"
  }
  else if (typeof(nonString) === 'object' && Object.keys(nonString).length > 0 ) {
    let nonStringObj = {} 
    for (let key in nonString) {
      let stringedKey = stringifyJSON(key)
      let stringedVal = stringifyJSON(nonString[key])
      nonStringObj[stringedKey] = stringedVal 
    }
    let objOutput = "{"
    for (let key in nonStringObj) {
      objOutput= objOutput + key + ':'+ nonStringObj[key]+','
    }
    return objOutput.slice(0,objOutput.length-1) +'}'
  }

  if (typeof (nonString) === 'string') {
    return '"'  + nonString + '"'
  }
  
  if(nonString === undefined){
    return 'bad value'
  }
  if (nonString.toString()) {
    return nonString.toString()
}
};
