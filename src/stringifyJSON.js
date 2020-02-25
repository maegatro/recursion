/* exported stringifyJSON */

const stringifyJSON = (value) => {
  let array = [];
  let object = [];

  //primitives or Date object
  if (
    typeof value === "number" || 
    typeof value === "boolean" || 
    value === null) {
      return "" + value;
  } else if (typeof value === "string") {
    return "\"" + value + "\"";
  }

  else if (value instanceof Date) {
    return "\"" + value.toISOString() + "\"";
  }

  //arrays
  else if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    } else {
      for (const element of value) {
        array.push(stringifyJSON(element));
      }
      return "[" + array + "]";
    }
  }

  //objects
  else if (typeof value === "object") {

    if (Object.keys(value).length === 0 &&
      !(object instanceof Date)) {
      return "{}";
    } else {
      for (const key in value) {
        let quotedKey = "\"" + key + "\":";
        let quotedKeyVal = "\"" + value[key] + "\"";

        if (typeof value[key] === "function" || typeof value[key] === "undefined") {
          continue;
        } else if (typeof value[key] === "string") {
          object.push(quotedKey + quotedKeyVal);
        } else if (
          typeof value[key] === "boolean" ||
          typeof value[key] === "number" ||
          value[key] === null) {
          object.push(quotedKey + value[key]);
        } else if (typeof value[key] === "object") {
          object.push(quotedKey + stringifyJSON(value[key]));
        }
      }
      return "{" + object + "}"
    }
  }
};