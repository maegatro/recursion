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

      //case `undefined`:
      //case `function`:
      //  return `{}`

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
        } else if (input !== null && !Array.isArray(input)){
          
          if((input.hasOwnProperty(`undefined`)) ||
            (input.hasOwnProperty(`function`))){
              return `{}`
            } else

          // direct build using reduce, with help from stackoverflow
          
          return `{` + Object.keys(input).reduce((acc, key) => {
            if (input[key] === undefined){
              return acc
            } else 
              return [...acc, stringing(key) + `:` + stringing(input[key])]
          }, []).join(`,`) + `}`
        
          
          
          /* Attempted object walk using similar idea of arrays - semi failure,
             I want to keep for further investigating with more time (deadline looming)
             - bad practice to keep old commented code, I know :(
               -possibilites check initial conditions + looping(recusion)

          let keys = Object.keys(input)
          let key = keys[index]

          if (Object.keys(input).length === 0){
            return `{}`
          }
          
          tmpBuilder = `"` + key + `":` + stringing(input[key])

          if(index < keys.length -1){
            return tmpBuilder + `,` + stringing(object, index + 1)
          }
          if (index === 0){
            return `{` + tmpBuilder + `}`
          }

          return tmpBuilder */
        }
      default:
        break;
    }
    
  }

  return stringing(objectToStringify)
};
