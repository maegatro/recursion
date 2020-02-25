/* exported stringifyJSON */

const stringifyJSON = (arg) => {
  // YOUR CODE HERE
  const isArray = (arr) => Array.isArray(arr);
  const isObj = (obj) => typeof obj === 'object' && !Array.isArray(obj);
  const isNumber = (num) => typeof num === 'number';
  const isString = (str) => typeof str === 'string';
  const wrapString = (str) => '"' + str + '"';
  const convetToStr = (val) => String(val);
  const dateToString = (date) => date.toISOString();
  

  let resultString = '';
  const innerFunc = (obj) =>{
    let count = 0;
    let needComma = true;

    if(typeof obj === 'boolean' 
    || typeof obj === 'undefined' 
    || !obj){ // when obj is boolean/undefined/null
      resultString += convetToStr(obj);
    }else if(isNumber(obj)){ // when obj is number
      resultString += obj;
    }else if(isString(obj)){ // when obj is string
      resultString += wrapString(obj);
    }else if(obj instanceof Date){ // when obj is new Date()
      resultString += wrapString(dateToString(obj));
    }else if(isArray(obj)){ // when obj is array
      
      const callback = (val) => {
        if(isNumber(val)){ // when obj:array, val:number
          resultString += val;
          count ++;
        }else if(isString(val)){ // when obj:array, val:string
          resultString += wrapString(val);
          count ++;
        }else if(val instanceof Date){ // when obj:array, val: new Date()
          resultString += wrapString(dateToString(val));
          count ++;
        }else{ // when obj:array, val: not number nor string
          innerFunc(val);
          count ++;
        }
        if(count < obj.length){
          resultString += ',';
        }
      }

      resultString += '[';
      _.each(obj,callback);
      resultString += ']';

    }else if(isObj(obj)){ // when obj is object
      
      const callback =(val, indexOrKey) => {
        //resultString += wrapString(indexOrKey) + ':';
        if(isNumber(val)){ // when obj:object, val:number
          resultString += wrapString(indexOrKey) + ':';
          resultString += val;
          count ++;
        }else if(isString(val)){ // when obj:object, val:string
          resultString += wrapString(indexOrKey) + ':';
          resultString += wrapString(val);
          count ++;
        }else if(typeof val === 'undefined' //when obj:object, val:undefined/function
        || typeof val === 'function'){
          count ++;
          needComma = false;
        }else if(val instanceof Date){ // when obj:object, val:new Date()
          resultString += wrapString(indexOrKey) + ':';
          resultString += wrapString(dateToString(val));
          count ++;
        }else{ // when obj:object, val: object/array
          resultString += wrapString(indexOrKey) + ':';
          innerFunc(val)
          count ++;
        }
        if(count < Object.keys(obj).length && needComma){
          resultString += ',';
        }
      }

      resultString += '{';
      _.each(obj,callback);
      resultString += '}'; 
    }
  }
  innerFunc(arg);
  return resultString;
}

// const date1 = new Date();
// const date2 = {'foo':[date1,date1]}
// const test1 = stringifyJSON(date1);
// const test2 = stringifyJSON(date2);
// console.log(test1,test2);
