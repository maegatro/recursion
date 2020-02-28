/* exported stringifyJSON */

const stringifyJSON = (target) => {
  let result = "";

  const convertToString = (value) =>{

    if (typeof value == "number" || typeof value == "boolean" || Object.prototype.toString.call(value) === "[object Date]"){
      result += String(value);
  
    }else if (value == null){
      result += "null";
  
    }else if(typeof value == "string"){
      result += '"' + value +'"';
    
    }else if (Array.isArray(value)){
      if(value.length == 0){
        result += "[]";
        return;

      }else{
        result += "[";

        for(let i = 0; i < value.length; i++){
          if(typeof value[i] == "string"){
            result += '"' + value[i] + '"' + ",";

            if(i == value.length - 1){
              result = result.slice(0, -1);
            }
  
          }else if(typeof value[i] == "number"){
            result += String(value[i]) + ",";

            if(i == value.length - 1){
              result = result.slice(0, -1);
            }

          }else{
            convertToString(value[i]);
            if(i !== value.length - 1){
              result += ",";
            }
          }
        } 
        result += "]";
        return;
      }
    }else{
      if (Object.keys(value).length === 0){
        result += "{}";
        
      }else{
        result += "{";

          for(let key in value){
            let keysArray = Object.keys(value);

          if (typeof value[key] == "number" || typeof value[key] == "boolean"){
            result += '"' + key + '":' + value[key] + ",";

            if (key == keysArray[keysArray.length - 1]){
              result = result.slice(0, -1);
            }
          }else if(value[key] === null){
            result += '"' + key + '":' + "null" + ",";

            if (key == keysArray[keysArray.length - 1]){
              result = result.slice(0, -1);
            }

          }else if(value[key] === undefined || typeof value[key] == "function");//do not do anything

          else if(typeof value[key] == "string"){
            result += '"' + key + '":' + '"' + value[key] + '",';

            if (key == keysArray[keysArray.length - 1]){
              result = result.slice(0, -1);
            }

          }else{
            result += '"' + key + '":';
            let originalKey = key;
            convertToString(value[key]);

            if (originalKey !== keysArray[keysArray.length - 1]){
              result += ",";
            }
          }
        }
        result += "}"
      }
    }    
    return result;
  }
  convertToString(target);
  return result;
};