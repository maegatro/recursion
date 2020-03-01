/* exported stringifyJSON */

const stringifyJSON = (nonString) => {
  try{  
    const stringifyStep = (nonStringStep) => {

      if(nonStringStep === null ) {
        return 'null'
      }
      // The next if will seperate 0-length arrays from 0-length objects and return the appropriate values
      if (Array.isArray(nonStringStep) && nonStringStep.length === 0) {
        return "[]"
      }
      else if (typeof(nonStringStep) === 'object') //&& Object.keys(nonStringStep)[0] === undefined) {
        return "{}"
      }

      //The next if will seperate non-0-length arrays from non-0-length objects and return the appropriate values
      if (Array.isArray(nonStringStep)  && nonStringStep.length > 0 ) {
        let nonStringStepArray =[] 
        for (let el of nonStringStep) {
          nonStringStepArray.push(stringifyStep(el))
        }
        return "[" + nonStringStepArray + "]"
      }
      else if (typeof(nonStringStep) === 'object' && Object.keys(nonStringStep).length > 0 ) {
        let nonStringStepObj = {} 
        for (let key in nonStringStep) {
          let stringedKey = stringifyStep(key)
          let stringedVal = stringifyStep(nonStringStep[key])
          nonStringStepObj[stringedKey] = stringedVal 
        }
        let objOutput = "{"
        for (let key in nonStringStepObj) {
          objOutput= objOutput + key + ':'+ nonStringStepObj[key]+','
        }
        return objOutput.slice(0,objOutput.length-1) +'}'
      }

      if (typeof (nonStringStep) === 'string') {
        return '"'  + nonStringStep + '"'
      }

      return nonStringStep.toString()
    }

    return stringifyStep(nonString)
  }
  catch {
    return '{}'
  }
}
