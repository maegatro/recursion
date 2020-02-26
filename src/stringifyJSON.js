// const stringifiableValues = [
//     100000,
//     true,
//     false,
//     null,
//     "Code Chrysalis",
//     [],
//     [10000],
//     ["yan"],
//     [10000, "kani"],
//     [1, 2, 1000, 0, -1, -3, -3.14, 3.14, 0.1099999, 1000.9999],
//     [[[["rachel"]]]],
//     [10000, [[1, 2, 3, 4], 5, 8]],
//     {},
//     { a: "is for apple" },
//     { foo: true, bar: false, baz: null },
//     { "boolean, true": true, "boolean, false": false, null: null,perro:["yo",1,true] },
//     // basic nesting
//     { a: { b: "c" } },
//     { a: ["b", "c"] },
//     [{ a: "b" }, { c: "d" }],
//     { a: [], c: {}, b: true }
//   ];


// let testString = {
//     Name:"Gatitas",
//     aFunction: () => {console.log("this is a function")},
//     Cat:"Dog",
//     undefined:undefined,
//     Dog:"Cat",
//     null:null,
//     Pet:"Cool"
// };


//debugger;
const stringifyJSON = (input) => {
    // YOUR CODE HERE
    
    /// test for primitive types
    console.log("the type of input is", typeof(input))
    if (typeof(input) === 'number' || typeof(input) === 'boolean'){ //typeof(obj) === 'string'){
        return input.toString()
    } else if (typeof(input) === 'string') {
        return '"' + input + '"';
    } else if (input === null){
        console.log("yes")
        return 'null'
    }

    // Test for Arrays
    if(Array.isArray(input) && input.length === 0) {
        return '[]';
    }

    if (Array.isArray(input)){
        let tempArray =[];
        input.forEach(item => tempArray.push(stringifyJSON(item)))
        // for(let item of input){
        //     tempArray.push(item)
        // }
        return "[" + tempArray.toString() + "]"

    }

    // Test for Objects
    //if (input.constructor.name == "Object"){
        let tempArrayOfKeysValues = []
        if (input instanceof Object && Object.keys(input).length === 0) {
            console.log("is an actual object")
            return '{}'
        } else if (input instanceof Object){
            objKeys = Object.keys(input);

            objKeys.forEach(function(key) {
              let keysToStringify = '"' + key + '"' + ':';
              let ValuesToStrinfigy = input[key];
              
            if (ValuesToStrinfigy instanceof Function || typeof ValuesToStrinfigy === undefined){
                tempArrayOfKeysValues.push('');

            } else if (typeof ValuesToStrinfigy === 'string') {
                tempArrayOfKeysValues.push(keysToStringify + '"' + ValuesToStrinfigy + '"');
            
            } else if (typeof ValuesToStrinfigy === 'boolean' || typeof ValuesToStrinfigy === 'number' || ValuesToStrinfigy === null) {
                tempArrayOfKeysValues.push(keysToStringify + ValuesToStrinfigy);
            
            // } else if (Array.isArray(ValuesToStrinfigy)){
            //     let tempArray =[];
            //     ValuesToStrinfigy.forEach(item => tempArray.push(stringifyJSON(item)))
            
            } else if (ValuesToStrinfigy instanceof Object) {
                tempArrayOfKeysValues.push(keysToStringify + stringifyJSON(ValuesToStrinfigy));
            
            }
          });
            return "{" + tempArrayOfKeysValues + "}"
        }
    } 

console.log(typeof(stringifyJSON(testString)))
console.log(stringifyJSON(testString))

console.log(JSON.stringify(testString))
console.log(typeof(JSON.stringify(testString)))

//   let result = stringifiableValues.toString();
//   console.log(result)