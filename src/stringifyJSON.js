/* exported stringifyJSON */

const stringifyJSON = (objectToStringify) => {
  //let answer
  //let result = `"${answer}"`
  
  function stringString(str){
    return (`"` + str + `"`)
  }
  
  function stringing(input, index){
    let result, tmpBuilder
    index = index || 0

    switch (typeof(input)){
      case `number`:
      case `boolean`:
        result = `${input}`
        break;

      case `string`:
        result = stringString(input)
        break;

      case `undefined`:
      case `function`:
        result = `{}`
        break;

      case `object`:
        if (input === null){
        result = `null`
        } else if (Array.isArray(input)){
          if (index = input.length){
            (result = `[]`)
          } else
            for (let i = 0; i < input.length; i++) {
              tmpBuilder = tmpBuilder + `'` + stringing(input[i])
          }
          result = (`[` + tmpBuilder + `]`)
        } else
        break;

      default:
        break;
    }
    return result
  }
  
  return stringing(objectToStringify)
};
