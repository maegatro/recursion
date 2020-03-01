/* exported stringifyJSON */

const stringifyJSON = (input) => {
  let result = "";
  let dataType = "";

  const covertToString = (val) => {
    let valLength = 0;
    dataType = Object.prototype.toString.call(val);

    if(dataType === "[object Date]"){
      result += `"${val.toISOString()}"`;
      return;
    }

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

    if(dataType === "[object Array]"){
      valLength = val.length;
      if(valLength === 0){
        result += `[]`;
        return;
      }else {
        for(let i = 0; i < valLength; i++){
          if(i === 0){
            result += "[";
            covertToString(val[i]);
          }else if(i < valLength){
            result += ",";
            covertToString(val[i]);
          }
        }
        result += "]";
        return;
      }
    }

    if(dataType === "[object Object]"){
      valLength = Object.keys(val).length;
      let valObjArr = Object.entries(val);
      if(valLength === 0){
        result += "{}";
        return;
      } else {
        for(let l = 0; l < valLength; l++){
          if(valObjArr[l][0] === undefined || Object.prototype.toString.call(valObjArr[l][1]) === "[object Function]") {
            result += `{}`;
            return;
          }

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
    covertToString(input);
    return result;
  }