/* exported stringifyJSON */

const stringifyJSON = (input) => {
  let result = "";

  function stringify(input) {
    if (input === null) result += "null";
    if (typeof input === "number") result += input;
    if (typeof input === "boolean") result += input;
    if (typeof input === "string") result += '"' + input + '"';
    if (Array.isArray(input)) {
      if (input.length === 0) {
        result += "[]";
      } else {
        for (let i = 0; i < input.length; i++) {
          if (i === 0) result += "[";
          stringify(input[i]);
          if (input[i] != input[input.length - 1]) result += ",";
        }
        result += "]";
      }
    }
    if (input instanceof Object && !Array.isArray(input)) {
      for (const prop in input) {
        if (typeof input[prop] === "function" || input[prop] === undefined) return result += "{}";
      }
      if (input instanceof Date) return result += input.toISOString();
      if (Object.keys(input).length === 0) {
        result += "{}";
      } else {
        result += "{";
        let count = 0;
        for (const prop in input) {
          result += `"${prop}":`;
          stringify(input[prop]);
          count++;
          if (Object.keys(input).length != count) result += ",";
        }
        result += "}"
      }

    }
  }

  stringify(input);
  return result;
};
