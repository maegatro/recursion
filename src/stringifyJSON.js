/* exported stringifyJSON */

const stringifyJSON = (objectToStringify) => {
  
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
        if (input === null){                     //-- NULL case --
        return `null`
        } else if (Array.isArray(input)){       //[]-- ARRAY case --
          if (input.length === index){
            return `[]`
          }
          tmpBuilder = stringing(input[index])  //[] <-will steam down through to get
                                                //[] returned unless conditions met
          if (index < input.length - 1){
            tmpBuilder = tmpBuilder + `,` + stringing(input, index + 1)
          }
          if (index === 0){
            return `[` + tmpBuilder + `]` //[] base case, adding brackets to final
          }

          return tmpBuilder               //[] to get out of a level of recursion
        }
        break;

      default:
        break;
    }
    
  }
  
  return stringing(objectToStringify)
};
