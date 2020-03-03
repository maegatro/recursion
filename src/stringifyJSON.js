/* exported stringifyJSON */

const stringifyJSON = (objectToStringify) => {
  //let answer
  //let result = `"${answer}"`
  
  function stringing(input){
    let result

    if (input === null)
      result = "null"

    switch (typeof(input)) {
      case "number":
      case "boolean":
        result = `${input}`
        break;
      case "undefined":
      case "function":
        result = "{}"
        break;

      default:
        break;
    }
    return result
  }
  
  return stringing(objectToStringify)
};
