/* exported stringifyJSON */

const stringifyJSON = (input) => {
  let result = "";
  let dataType = "";
  let counter = 0;
  let valLength = 0;
  let isObject = false;
  let isArray = false;
  let isPrimitive = ["[object Number]", "[object Boolean]", "[object Null]"];

  const covertToString = (val) => {

    dataType = Object.prototype.toString.call(val);
    // console.log(dataType);

    // if(dataType === "[object Undefined]") return;

    if(dataType === "[object Number]"){
      result += `${val}`;
      return;
    }

    if(dataType === "[object Null]"){
      result += `${val}`;
      return;
    }

    if(dataType === "[object Boolean]"){
      result += `${val}`;
      return;
    }

    if(dataType === "[object String]"){
      result += `"${val}"`;
      return;
    }

    if(dataType === "[object Array]" || isArray){
      valLength = val.length;
      isArray = true;
      if(valLength === 0){
        result += `[]`;
        return;
      }else {
        for(let i = 0; i < valLength; i++){
          if(i === 0){
            result += "[";
            covertToString(val[i]);
          }else if(i !== valLength){
            result += ",";
            covertToString(val[i]);
          }
        }
      }
      result += "]";
    }

    if(dataType === "[object Object]" || isObject){
      valLength = Object.keys(val).length;
      valObjArr = Object.entries(val);

      if(valLength === 0){
        result += "{}";
        return;
      } else {
        for(let l = 0; l < valLength; l++){
          // result +=`${covertToString(valObjArr[l][0])}:${covertToString(valObjArr[l][1])}`;
          if(l === 0){
            result += "{";
            covertToString(valObjArr[l][0]);
            result += ":";
            covertToString(valObjArr[l][1]);
          }else {
            result += ",";
            covertToString(valObjArr[l][0]);
            result += ":";
            covertToString(valObjArr[l][1]);
          }
        }
      }
      result += "}";
    }
  }
    console.log(result);
    covertToString(input);

    return result;
  }