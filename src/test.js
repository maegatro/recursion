//var arr=[1,2,3,4];
//var arr2=[];
//for(var i = 0; i < arr.length;i++){
//    arr2.push(''+arr[i]);
//}
//var arr3='['+arr2.join(',')+']';
//console.log(arr3);
//var obj={key1:2, key2:3}
//var arr1=[];
//for(var key in obj){
//  arr1.push(''+key+':'+(obj[key]));
//}
//var arr4='{'+arr1.join(',')+'}';
//console.log(arr4);
var obj={function:function(){}, undefined:undefined}
var arr1=[];
for(var key in obj){
 console.log(typeof obj[key]);
if(typeof obj[key]=="function"){
    arr1.push();
}
if(typeof obj[key]==undefined){
   arr1.push();
}
}
console.log(arr1);