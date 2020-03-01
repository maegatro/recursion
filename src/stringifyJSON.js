/* exported stringifyJSON */
// const stringifyJSON = (value) => {
//   if (typeof value == "string") {
//     return `"${value}"`;
//   } else if (typeof value == "number" || typeof value == "boolean") {
//     return value.toString();
//   } else if (value == null) {
//     return "null";
//   } else if (typeof value == "object" && !Array.isArray(value)) {
//     let objString = [];
//     for (const key in value) {
//       if (typeof value[key] == "function" || value[key] === undefined) {
//         continue;
//       } else {
//         objString.push(`${stringifyJSON(key)}:${stringifyJSON(value[key])}`);
//       }
//     }
//     return `{${objString.join(",")}}`;
//   } else if (Array.isArray(value)) {
//     let arrayString = [];
//     for (const i of value) {
//       if (typeof i === undefined || typeof i == "function") {
//         continue;
//       } else {
//         arrayString.push(stringifyJSON(i));
//       }
//     }
//     return `[${arrayString.join(",")}]`;
//   }
// };

const stringifyJSON = (value) => {
  if (typeof value == "string") {
    return `"${value}"`;
  } else if (typeof value == "number" || typeof value == "boolean") {
    return value.toString();
  } else if (value == null) {
    return "null";
  } else if (typeof value == "object") {
    let toString = Object.prototype.toString;
    if (toString.call(value) == "[object Date]") {
      // console.log(value);
      return `"${value.toISOString()}"`;
    } else if (Array.isArray(value)) {
      let arrayString = [];
      for (const i of value) {
        if (typeof i === undefined || typeof i == "function") {
          continue;
        } else {
          arrayString.push(stringifyJSON(i));
        }
      }
      return `[${arrayString.join(",")}]`;
    } else if (toString.call(value) == "[object Object]") {
      let objString = [];
      for (const key in value) {
        if (typeof value[key] == "function" || value[key] === undefined) {
          continue;
        } else {
          objString.push(`${stringifyJSON(key)}:${stringifyJSON(value[key])}`);
        }
      }
      return `{${objString.join(",")}}`;
    }
  }
};
