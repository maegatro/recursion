/* exported stringifyJSON */

const stringifyJSON = (arg) => {
  // YOUR CODE HERE
  const isArray = (arr) => Array.isArray(arr);
  const isObj = (obj) => typeof obj === 'object' && !Array.isArray(obj);
  const isNumber = (num) => typeof num === 'number';
  const isString = (str) => typeof str === 'string';
  const wrapString = (str) => '"' + str + '"';
  const convetToStr = (val) => String(val);

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
    }else if(isArray(obj)){ // when obj is array
      resultString += '[';
      const callback = (val, indexOrKey, collection) => {
        if(isNumber(val)){ // when obj:array, val:number
          resultString += val;
          count ++;
        }else if(isString(val)){ // when obj:array, val:string
          resultString += wrapString(val);
          count ++;
        }else{ // when obj:array, val: not number nor string
          innerFunc(val);
          count ++;
        }
        if(count < obj.length){
          resultString += ',';
        }
      }
      _.each(obj,callback);
      resultString += ']';
    }else if(isObj(obj)){ // when obj is object
      resultString += '{';
      const callback =(val, indexOrKey, collection) => {
        //resultString += wrapString(indexOrKey) + ':';
        if(isNumber(val)){ // when obj:object, val:number
          resultString += wrapString(indexOrKey) + ':';
          resultString += val;
          count ++;
        }else if(isString(val)){ // when obj:object, val:string
          resultString += wrapString(indexOrKey) + ':';
          resultString += wrapString(val);
          count ++;
        }else if(typeof val === 'undefined' 
        || typeof val === 'function'){
          count ++;
          needComma = false;
        }else{ // when obj:object, val: not number nor string
          resultString += wrapString(indexOrKey) + ':';
          innerFunc(val)
          count ++;
        }
        if(count < Object.keys(obj).length && needComma){
          resultString += ',';
        }
      }
      _.each(obj,callback);
      resultString += '}'; 
    }
  }
  innerFunc(arg);
  return resultString;
}
// const test0 = stringifyJSON({ foo: true, bar: false, baz: null });
// console.log('test0',test0);
// console.log(JSON.stringify({ foo: true, bar: false, baz: null }));

// const lastOne = [
//   {
//     function1: function() {},
//     function2: function() {},
//     undefined: undefined
//   }
// ]

// const test1 = stringifyJSON(lastOne);
// console.log('test1',test1);
// console.log(lastOne,JSON.stringify(lastOne));