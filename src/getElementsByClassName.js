/* exported getElementsByClassName */

const getElementsByClassName = (classTarget) => {
var result =[];

 var getClass = function(askClass = document.documentElement){
    var checker = false;
     if(askClass.className){
      checker = askClass.className.includes(classTarget);
     }
     if(checker){
        result.push(askClass);
     }
    if(askClass.childNodes.length>0){
    for(var node of askClass.childNodes){
        getClass(node);
    }
   }
  }
 getClass();
 return result;
};
