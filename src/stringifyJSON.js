/* exported stringifyJSON */

const stringifyJSON = (val) => {
  //Primitives
  if (typeof val === "boolean" || typeof val === "number") {
    return `${val}`;
  }

  if (typeof val === "string") {
    return `"${val}"`;
  }

  if (val === null) {
    return "null";
  }

  if (val instanceof Date) {
    const date = val.toISOString();
    return `"${date}"`;
  }

  //Array
  if (Array.isArray(val)) {
    let arr = [];
    val.map(function(elementOfVal) {
      arr.push(stringifyJSON(elementOfVal));
    });
    return "[" + arr.join() + "]";
  }

  if (typeof val === "object") {
    let arr = [];
    for (let key in val) {
      let data = val[key];
      let stringifyVal = stringifyJSON(data);
      if (typeof stringifyVal !== "undefined") {
        arr.push(`"${key}":${stringifyVal}`);
      }
    }
    return "{" + arr.join(",") + "}";
  }
};
