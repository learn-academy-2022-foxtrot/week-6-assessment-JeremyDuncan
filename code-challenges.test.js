//******************************************************************************
//******************************************************************************
// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought
// process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
//******************************************************************************
//******************************************************************************

//******************************************************************************
// --------------------1)👉Create a function that takes in an array of objects
// and returns an array with a sentence about each person with their name
// capitalized.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("describePerson", () => {
  it("returns an array with a sentence about each person with name capitalized", () => {
    //=== Provided Test Cases ===
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" },
    ];
    //=== Expected Test Results ===
    expected1 = [
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ];
    expect(describePerson(people)).toEqual(expected1);
  });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//************************** Explanation ***************************************
/*  1.  I Map over my array of objects
    2.  Then I use string interpolation and split the value of "name" into an 
        an array of strings (first & last name)
    3.  Then I Map over that array and use Slice to make the first letter of 
        each name capital, then add the remaining sliced letters of each name
        back together to make a capital name.
    4.  I Join the array with capital names back into a string.
    5.  Finally I add the value of occupation in my interpolated string.
*/
//******************************************************************************

const describePerson = (arr) => {
  return arr.map(
    (obj) =>
      `${obj.name
        .split(" ")
        .map((nm) => nm.slice(0, 1).toUpperCase() + nm.slice(1))
        .join(" ")} is ${obj.occupation}.`
  );
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// describePerson
//   ✓ returns an array with a sentence about each person with name capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.138 s, estimated 1 s
// Ran all test suites matching /code-challenges.test.js/i.
// ✨  Done in 0.47s.
//------------------------------------------------------------------------------

//******************************************************************************
// --------------------2)👉Create a function that takes in a mixed data array
// and returns an array of only the REMAINDERS of the numbers when divided by 3.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("getRemOfThree", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    //=== Provided Test Cases ===
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];

    //=== Expected Test Results ===
    expected1 = [2, 0, -1, 0];
    expected2 = [2, 1, -1];

    expect(getRemOfThree(hodgepodge1)).toEqual(expected1);
    expect(getRemOfThree(hodgepodge2)).toEqual(expected2);
  });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//************************** Explanation ***************************************
/*  1.  I Filter over my array of mixed data types
    2.  Then I use the typeof operator to select only the data types that are 
        numbers
    3.  Then I Map over that returned Filter array and apply Modulus 3 to 
        acquire the remainder of the each real number
*/
//******************************************************************************

const getRemOfThree = (arr) => {
  return arr.filter((val) => typeof val === "number").map((v) => v % 3);
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// describePerson
//   ✓ returns an array with a sentence about each person with name capitalized (1 ms)
// getRemOfThree
//   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.185 s
// Ran all test suites matching /code-challenges.test.js/i.
// ✨  Done in 0.53s.
//------------------------------------------------------------------------------

//******************************************************************************
// --------------------3)👉Create a function that takes in an array of numbers
// and returns the sum of all the numbers cubed.
//******************************************************************************

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a)🧪 Create a test with expect statements using the variables provided.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe("getCubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    //=== Provided Test Cases ===
    const cubeAndSum1 = [2, 3, 4];
    const cubeAndSum2 = [0, 5, 10];

    //=== Expected Test Results ===
    expected1 = 99
    expected2 = 1125

    expect(getCubed(cubeAndSum1)).toEqual(expected1);
    expect(getCubed(cubeAndSum2)).toEqual(expected2);
  });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// b)👨‍💻 Create the function that makes the test pass.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//************************** Explanation ***************************************
/*  1.  I Map over my array of integers
    2.  Then I cube the value of each integer and return that into an array of
        cubed numbers.
    3.  Then I use Reduce to add the value of each cubed number into one single
        reduced value, which is the sum of all the cubed numbers.
*/
//******************************************************************************

const getCubed = (arr) => {
  return arr.map((v) => v ** 3).reduce((val, nextVal) => val + nextVal);
};

//--------------------||✅ Final Test Results ✅||------------------------------
// PASS  ./code-challenges.test.js
// describePerson
//   ✓ returns an array with a sentence about each person with name capitalized (1 ms)
// getRemOfThree
//   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3
// getCubed
//   ✓ returns the sum of all the numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.191 s, estimated 1 s
// Ran all test suites matching /code-challenges.test.js/i.
// ✨  Done in 0.64s.
//------------------------------------------------------------------------------
