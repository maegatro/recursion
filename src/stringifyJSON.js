/* exported stringifyJSON */

const stringifyJSON = (obj) => {
  // YOUR CODE HERE
  //console.log("obj",obj)
  let arrVals = [];
  let objKeys = [];
  let keyVals = [];
 
if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
  return "" + obj;
}else if (typeof obj === 'string'){
  return '"' + obj + '"';
}
else if (Array.isArray(obj)){
  if (obj[0] === undefined){
      return "[]";
  }else{
      obj.forEach((element)=>{
          arrVals.push(stringifyJSON(element));
      });
      return "[" + arrVals + "]";
  }
}
else if(Object.prototype.toString.call(obj)==="[object Date]"){
  let date = obj.toISOString()
  return `"${date}"`;
}
else if (obj instanceof Object) {
  objKeys = Object.keys(obj);
  objKeys.forEach((key)=>{
      let getAkey = '"' + key + '":';
      let getAval = obj[key];
      //console.log(getAval)
      if (getAval instanceof Function){
          keyVals.push('');
      }else if (typeof getAval === 'string'){
          keyVals.push(getAkey + '"' + getAval + '"');
          //console.log(keyVals)
      }else if (typeof getAval === "number" || typeof getAval === 'boolean' || getAval === null){
          keyVals.push(getAkey + getAval);
      }else if (getAval instanceof Object){
          keyVals.push(getAkey + stringifyJSON(getAval));
      }else if(getAval instanceof Date){
          keyVals.push(getAkey + '"' + getAval.toISOString()+'"')
      }
  });
  return '{' + keyVals + '}';
}
};

