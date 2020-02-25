/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (input) => {
  if(input instanceof Date) {
    const value = input.toISOString()
    return `"${value}"`
  }
  if(typeof input === "number" || typeof input === "boolean" || input === null) {
    return `${input}`
  }
  if(typeof input === "string") {
    return `"${input}"`
  }
  if (Array.isArray(input)) {
    const result = [];
    input.map(e => result.push(stringifyJSON(e)));
    return "[" + result.join() + "]";
  }
  if(typeof input === "object") {
    const result = [];
    for(const key in input) {
      const value = input[key]
      const stringifyValue = stringifyJSON(value)

      if(typeof stringifyValue !== "undefined") {
      result.push(`"${key}":${stringifyValue}`);
      }

    }
    return "{" + result.join(',') + "}";
  }
};

// console.log(stringifyJSON(['Fire', 'Air', 'Water']))

