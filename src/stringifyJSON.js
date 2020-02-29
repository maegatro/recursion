/* exported stringifyJSON */

const stringifyJSON = (input) => {
  let result = "";
  let dataType = "";

  let isPrimitive = ["[object Number]", "[object Boolean]", "[object Null]"];
  //, "[object String]"
  // console.log(input);

  const covertToString = (val) => {
    let counter = 0;
    let dataType = Object.prototype.toString.call(val);
    let valLength = 0;

    if(dataType === "[object Array]") valLength = val.length;

    if(dataType === "[object Object]") valLength = Object.keys(val).length;

    // Base case
    if(isPrimitive.includes(dataType)){
      result = `${val}`;
      return;
    }else if(dataType === "[object String]") {
      result =  `"${val}"`;
      return;
    }else {
      // Base case for object and arrays

      // When the pointer is at the end of the array
    }

    //Recursive case
    for(el in val){
      result += `${val[el]},`
    }

  }

  covertToString(input);

  console.log("result "+ result);
  return result;
};

  // Base case
    // When input is a primitive data(i.e. boolean, numerical, null)
      // Just print that value

    // When input is an empty array or object???
      // Just print that value

  // Recursive case (When it is an object(nested, not empty)
  //or an array(nested with objects/nested with arrays))

/*
  1) undefined, Function and Symbols are not valid JSON values ---> converted to null
  2) all key properties are enclosed with double quotations
  3) if it is an array, add quotation marks to the entire array
*/