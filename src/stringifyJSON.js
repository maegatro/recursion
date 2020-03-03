/* exported stringifyJSON */

const stringifyJSON = (obj) => {
  
  if (!Array.isArray(obj) && typeof obj !== 'object' && typeof obj !== 'function' && typeof obj !== undefined ){
    if(typeof obj== "string"){
      return '"'+obj+'"'
    }
    else if(Object.prototype.toString.call(obj) === '[object Date]'){ 
    return '"'+obj.toString()+'"';
  }
  else return ''+obj;
  }
  if(obj == null){
    return 'null';
  }

  if(Array.isArray(obj)){
    var arr2=[];
    for (var i = 0; i < obj.length; i++){
      arr2.push(stringifyJSON(obj[i]));
    }
    var arr3 = '['+arr2.join(',')+']';
    return arr3;
    
  }
  if((typeof obj) =='object'){
    
    var arr1=[];
    for(var key in obj){
      if(typeof obj[key] =='function' || typeof obj[key] == 'undefined'){
      }
      else{
      arr1.push(''+'"'+key+'"'+':'+stringifyJSON(obj[key]));
      }
    }
    var arr4='{'+arr1.join(',')+'}';
    return arr4;
    
  }
};
