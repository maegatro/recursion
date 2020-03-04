/* exported stringifyJSON */

const stringifyJSON = (item) => {
  let result = "";
  
  function makeString(thing) {
    let resultArray = [];
    if (typeof thing === "number") {
      result = thing.toString();
      return result;
    }else if (typeof thing === "boolean"){
      result = thing.toString();
      return result;
    }else if (thing === null) {
      result  = "null";
      return result;
    }else if (typeof thing === "string") {
      result = '"' + thing + '"';
      return result;
    }else if (Array.isArray(thing)) {
      if (thing.length === 0) {
        result = '[]';
        return result;
      }else {
        thing.forEach((element) => { 
          resultArray.push(makeString(element));
        });
        result =  "[" + resultArray + "]";
        return result;
      }  
    }else if (typeof thing === "object") {
      let resultObject = "";
      if (Object.keys(thing).length === 0) {
        result = "{}";
        return result;
      }
      for (let key in thing) {
        let value = thing[key];
        if (typeof value === "undefined" || typeof value === "function") {
          result = "{}";
          return result;
        }
        resultObject += `"${key}":${makeString(value)},`;  
      }
      resultObject = resultObject.slice(0,-1);
      result = "{" + resultObject + "}";
      return result;
    }
  }
  makeString(item);  
  return result;
};
