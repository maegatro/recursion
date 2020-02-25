/* exported stringifyJSON */

const stringifyJSON = (value) => {
  //if it's a number, boolean, null
  if (
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null
  ) {
    return "" + value;
  }

  //if it's a string
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

  //if it's a date
  if (Object.prototype.toString.call(value) === "[object Date]") {
    const stringifiedDate = value.toISOString();
    return `"${stringifiedDate}"`;
  }

  //if it's an object
  if (Object.prototype.toString.call(value) === "[object Object]") {
    const stringifiedObject = [];

    for (var key in value) {
      if (stringifyJSON(value[key]) !== undefined)
        stringifiedObject.push(
          stringifyJSON(key) + ":" + stringifyJSON(value[key])
        );
    }

    return "{" + stringifiedObject + "}";
  }
};
