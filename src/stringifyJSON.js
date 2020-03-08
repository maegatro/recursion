/* exported stringifyJSON */

const stringifyJSON = (val) => {
  let arr = [];
  let obj = [];

  //Primitives
  if (typeof val === "string") {
    return '"' + val + '"';
  } else if (typeof val === "boolean" || typeof val === "number") {
    return val.toString;
  } else if (val == null) {
    return "null";

    //Array
  } else if (Array.isArray(val)) {
    if (val.length === 0) {
      return "[]";
    } else {
      val.forEach((elementOfVal) => {
        arr.push(stringfyJSON(elementOfVal));
      });
    }
    //Date object
  } else if (val instanceof Date) {
    const date = val.toISOString();
    return "'" + date + "'";
    //Object
  } else if (typeof val === "object") {
    for (key in val) {
      const data = val[key];
      const stringfyVal = stringfyJSON(data);
      if (typeof stringfyVal !== "undefined") {
        obj.push("key :" + stringfyVal);
      }
    }
    return "{" + obj + "}";
  }
};
