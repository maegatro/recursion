/* exported stringifyJSON */

const stringifyJSON = (objectToStringify) => {
  //let answer
  //let result = `"${answer}"`
  
  function stringString(str){
    return `"` + str + `"`
  }
  
  function stringing(input, index){
    let tmpBuilder
    index = index || 0

    switch (typeof(input)){
      case `number`:
      case `boolean`:
        return `${input}`

      case `string`:
        return stringString(input)

      case `undefined`:
      case `function`:
        return `{}`

      case `object`:
        if (input === null){
        return `null`
        } else if (Array.isArray(input)){
          if (input.length === index){
            return `[]`
          }
          tmpBuilder = stringing(input[index])

          if (index < input.length - 1){
            tmpBuilder = tmpBuilder + `,` + stringing(input, index + 1)
          }
          return `[` + tmpBuilder + `]`
        }
        break;

      default:
        break;
    }
    
  }
  
  return stringing(objectToStringify)
};
