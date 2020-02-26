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

    // Check arrays
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


} 


console.log(typeof(stringifyJSON(testString)))
console.log(stringifyJSON(testString))

console.log(JSON.stringify(testString))
console.log(typeof(JSON.stringify(testString)))

//   let result = stringifiableValues.toString();
//   console.log(result)