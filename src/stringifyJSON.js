/* exported stringifyJSON */
obj1 =[1,2,3,[2,3],4];

const stringifyJSON = (obj) => {
  var result=[];
  console.log(!Array.isArray(obj));
  console.log(typeof obj !== 'object');
  console.log(obj !== null);
  if ((!Array.isArray(obj) || typeof obj !== 'object') && obj !== null){
    console.log('enter');
    return ''+obj;
  }
  if(obj == null){
    return ''+'null';
  }
  if(typeof obj =='function'){
    return ''+obj;
  }
  if(Array.isArray(obj)){
    var arr2=[];
    for (var i = 0; i < obj.length; i++){
      arr2.push(stringifyJSON(obj[i]));
    }
    var arr3 = '['+arr2.join(',')+']';
    result.push(arr3);
  }
  
  return '{'+result.join(',')+'}';
};
console.log(stringifyJSON(obj1));