/* exported stringifyJSON */

const stringifyJSON = (info) => {
  // YOUR CODE HERE
  // console.log(typeof info);
  let result = "";

  const recurse = (value) => {
    console.log("aaa", value);
    if (typeof value === "string"){
      result = `"${value}"`;
    } else if (value === null){
      result = "null"; 

    } else if (Array.isArray(value)){
      console.log("array", value);
        if (value.length < 1){
        result = `[${value}]`;
        } else {
          result = "["
          for (let i = 0; i < value.length; i++){
            if (typeof value[i] === "string"){
              result += '"' + value[i] + '"' + ",";
                if (i === value.length - 1){
                  result = result.slice(0, -1) + "]";
              } 
            } 
            else if(typeof value[i] == "number"){
              result += value[i] + ",";
                if (i === value.length - 1){
                  result = result.slice(0, -1) + "]";
                }
            } else {
              result = "'" + value + "'";
            }
          }
        }
    } else {
      result =  value.toString();
    }
  
};
  recurse(info);
  return result; 

 
}
