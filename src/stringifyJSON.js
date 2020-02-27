/* exported stringifyJSON */

const stringifyJSON = (target) => {
  let result = "";
  let resultElements = [];

  const convertToString = (value) =>{

    if (typeof value == "number"){
      result += String(value);
  
    }else if (typeof value == "boolean"){
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
            //result += '"' + value[i] + '"' + ",";
            resultElements.push('"' + value[i] + '"');
  
          }else if(typeof value[i] == "number"){
            //result += String(value[i]) + ",";
            resultElements.push(String(value[i]));

          }else{
            convertToString(value[i]);
            //result = result.slice(0, -1);
            //result += "],";
          }
        } 
        //result = result.slice(0, -1);
        result += resultElements.join(",");
        resultElements = [];
        result += "]";
        return;
      }
    }else{
      if (Object.keys(value).length === 0){
        result += "{}";
        
      }else{
        result += "{";

          for(key in value){
          if (typeof value[key] == "number"){
            //result += '"' + key + '":' + value[key] + ",";
            resultElements.push('"' + key + '":' + value[key]);

          }else if(typeof value[key] == "boolean"){
            //result += '"' + key + '":' + value[key] + ",";
            resultElements.push('"' + key + '":' + value[key]);

          }else if(value[key] == null){
            //result += '"' + key + '":' + "null" + ",";
            resultElements.push('"' + key + '":' + "null");

          }else if(typeof value[key] == "string"){
            //result += '"' + key + '":' + '"' + value[key] + '",';
            resultElements.push('"' + key + '":' + '"' + value[key] + '"');
            
          }else{
            //result += '"' + key + '":';
            convertToString(value[key]);
            //result += ",";
          }
        }
        //result = result.slice(0, -1);
        result += resultElements.join(",")
        resultElements = [];
        result += "}"
      }
    }    
    return result;
  }
  convertToString(target);
  return result;
};



let array1 = { a: { b: "c" } };
console.log(stringifyJSON(array1))
console.log(Object.keys(array1).length)

//array[2] = [3, 4]
//console.log(stringifyJSON(array1[2]))
