// /* exported stringifyJSON */


//debugger;

function stringifyJSON(input) {
    // YOUR CODE HERE
    /// test for primitive types
    if (typeof (input) === 'number' || typeof (input) === 'boolean') { //typeof(obj) === 'string'){
        return input.toString()
    } else if (typeof (input) === 'string') {
        return '"' + input + '"';
    } else if (input === null) {
        //console.log("yes")
        return 'null'
    }

    if (input.getMonth) {
        return `"${input.toISOString()}"`;
    }
    // Test for Arrays
    if (Array.isArray(input) && input.length === 0) {
        return '[]';
    }

    if (Array.isArray(input)) {
        let tempArray = [];
        input.forEach(item => tempArray.push(stringifyJSON(item)))
        return "[" + tempArray.toString() + "]"
    }
    // Test for Objects
    //if (input.constructor.name == "Object"){
    let tempArrayOfKeysValues = []
    if (input instanceof Object && Object.keys(input).length === 0) {
        //console.log("is an actual object")
        return '{}'
    } else if (input instanceof Object) {
        let objKeys = Object.keys(input);

        objKeys.forEach(function (key) {
            let keysToStringify = '"' + key + '"' + ':';
            let ValuesToStrinfigy = input[key];

            if (ValuesToStrinfigy instanceof Function || typeof ValuesToStrinfigy === undefined) {
                tempArrayOfKeysValues.push('');

            } else if (typeof ValuesToStrinfigy === 'string') {
                tempArrayOfKeysValues.push(keysToStringify + '"' + ValuesToStrinfigy + '"');

            } else if (typeof ValuesToStrinfigy === 'boolean' || typeof ValuesToStrinfigy === 'number' || ValuesToStrinfigy === null) {
                tempArrayOfKeysValues.push(keysToStringify + ValuesToStrinfigy);

            } else if (ValuesToStrinfigy instanceof Object) {
                tempArrayOfKeysValues.push(keysToStringify + stringifyJSON(ValuesToStrinfigy));
            }
        });
        return "{" + tempArrayOfKeysValues + "}"
    }
}

   // stringifyJSON(stringifiableValues);