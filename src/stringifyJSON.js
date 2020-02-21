/* exported stringifyJSON */

const stringifyJSON = (value) => {
  const singleQuote = "'";

  if (typeof value === "string") {
    return `"${value}"`;
  }

  //if it's an array
  if (Array.isArray(value)) {
    const stringifiedArray = [];
    value.forEach((value) => {
      stringifiedArray.push(stringifyJSON(value));
    });
    return `[${stringifiedArray}]`;
  }

  //if it's an object
  if (Object.prototype.toString.call(value) === "[object Object]") {
    const stringifiedObject = "";
    for (var key in value) {
      return `{${stringifyJSON(key)}:${stringifyJSON(value[key])}}`;
    }
    //return stringifiedObject;
  }

  return "" + value;
};
