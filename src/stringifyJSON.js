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
    console.log(dataType);

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
      console.log(valLength);
      isArray = true;
      if(valLength === 0){
        result += `[]`;
        return;
      }else {
        for(let i = 0; i < valLength; i++){
          if(i === 0){
            result += "[";
          }else{
            result += ",";
          }
          covertToString(val[i]);
          console.log("result" + result);
        }
      }
    }
    }
    covertToString(input);

    return result;
  }