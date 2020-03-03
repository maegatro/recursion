/* exported stringifyJSON */
obj1 =[1,2,3,{key1:2,key2:5},[],3,4,5];

const stringifyJSON = (obj) => {
  
  if ((!Array.isArray(obj) && typeof obj !== 'object')){
    if(typeof obj== "string"){
      return '"'+obj+'"'
    }
    else return ''+obj;
  }
  if(obj == null){
    return 'null';
  }
  if(typeof obj =='function'){
    return '';
  }
  if(Array.isArray(obj)){
    console.log('enter');
    var arr2=[];
    for (var i = 0; i < obj.length; i++){
      console.log(obj[i]);
      arr2.push(stringifyJSON(obj[i]));
    }
    var arr3 = '['+arr2.join(',')+']';
    return arr3;
    
  }
  if((typeof obj) =='object'){
    
    var arr1=[];
    for(var key in obj){
      arr1.push(''+'"'+key+'"'+':'+stringifyJSON(obj[key]));
    }
    var arr4='{'+arr1.join(',')+'}';
    return arr4;
    
  }
};
console.log(stringifyJSON(obj1));