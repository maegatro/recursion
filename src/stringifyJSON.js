// /* exported stringifyJSON */

const stringifyJSON = (info) => {
  // YOUR CODE HERE
  if (typeof info === "number" || typeof info === "boolean"){
    return info.toString();
  }
  if (info === null){
    return 'null'; 
  }
  if (typeof info === "string"){
    return `"${info}"`;
  }
  if (info instanceof Date){
    info = info.toISOString();
    // console.log(info);
    return `"${info}"`
  }

  if (typeof info === "object"){
    let resultArr = '['; 
    let resultArrEnd = ']';


    if (Array.isArray(info)){
      if (info.length < 1){
        resultArr += resultArrEnd;  
      }

      for (let i = 0; i < info.length; i++){
        if (i === 0 && i === info.length -1){
            resultArr += stringifyJSON(info[i]) + resultArrEnd;
            // console.log(resultArr);
        } else if (i === 0 && i !== info.length - 1){
          resultArr += stringifyJSON(info[i]); 
        } else if ((i === 1 && i === info.length - 1) || (i > 1 && i === info.length - 1)){
            resultArr += ',' + stringifyJSON(info[i]) + resultArrEnd; 
            // console.log(resultArr);
        } else if (i === 1 && i !== info.length - 1){
            resultArr += ',' + stringifyJSON(info[i]);
            // console.log(resultArr);
        } else {
            resultArr += ',' + info[i]; 
        }
      }
      return resultArr;
    } else {
      let resultObj = '{';
      let resultObjEnd = '}';



      if (Object.keys(info).length < 1){
        resultObj += resultObjEnd; 
      } 

      for (const key in info){
        let stringKey = `"${key}"`;
        // console.log(key);
        let totalKey = Object.keys(info).length;
        let arrKeys = Object.keys(info);
        if (info[key] === undefined){
          return "{}";
        }
        // console.log(arrKeys[0]);
        if (totalKey === 1){
          resultObj += stringKey + ':' + stringifyJSON(info[key]) + resultObjEnd;
        } else if (totalKey > 1 && key === arrKeys[0]){
          resultObj += stringKey + ':' + stringifyJSON(info[key]);
        } else if (totalKey > 1 && key === arrKeys[totalKey - 1]){
          // console.log("aaa", key ,arrKeys[totalKey - 1]);
          resultObj += ',' + stringKey + ':' + stringifyJSON(info[key]) + resultObjEnd;
        } else if (totalKey > 1 && key !== arrKeys[totalKey - 1]){
          resultObj += ',' + stringKey + ':' + stringifyJSON(info[key]);
          // console.log(resultObj);
        } 
      }     
      return resultObj;
    }
  }
}

