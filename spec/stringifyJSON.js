const stringifiableValues = [
  100000, // number
  true, // boolean
  false, // boolean
  null, // boolean
  "Code Chrysalis", // string
  [], // array
  [10000], // array with number
  ["yan"], // array with string
  [10000, "kani"], // array with number and string
  [1, 2, 1000, 0, -1, -3, -3.14, 3.14, 0.1099999, 1000.9999], // many numbers
  [[[["rachel"]]]], // deeply nested array within array with string value
  [10000, [[1, 2, 3, 4], 5, 8]], // numbers and some string values
  {}, // object
  { a: "is for apple" }, // object with element title plus string
  { foo: true, bar: false, baz: null }, // object with element titles plus booleans
  { "boolean, true": true, "boolean, false": false, null: null }, // object with some titles and boolean values
  // basic nesting
  { a: { b: "c" } }, // deep nested object
  { a: ["b", "c"] }, // deep nested object with array
  [{ a: "b" }, { c: "d" }], // array of objects
  { a: [], c: {}, b: true } // object with array and object and boolean
];

const unstringifiableValues = [
  {
    functions: function() {},
    undefined: undefined
  }
];

describe("stringifyJSON", function() {
  function testStringify(valueToTest, index) {
    it("should parse some objects " + index, () => {
      const result = stringifyJSON(valueToTest);
      const expected = JSON.stringify(valueToTest);
      expect(result).toEqual(expected);
    });
  }

  for (let i = 0; i < stringifiableValues.length; i++) {
    testStringify(stringifiableValues[i], i);
  }

  function testUnstringifiable(valueToTest, index) {
    it("should not be able to parse bad values", () => {
      const result = stringifyJSON(valueToTest);
      const expected = JSON.stringify(valueToTest);
      expect(result).toEqual(expected);
    });
  }

  for (let i = 0; i < unstringifiableValues.length; i++) {
    testUnstringifiable(unstringifiableValues[i], i);
  }
});
