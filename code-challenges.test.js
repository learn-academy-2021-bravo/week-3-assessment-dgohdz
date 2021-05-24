// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.


// a) Create a test with expect statements for each of the variables provided.

//code describe with the name of the function
//write variables for array input and outputs
//test what you want the the function to do.
//write expect statement .
describe("fibLength", () => {
  let arrInput = ["6"];
  let outPut = [1, 1, 2, 3, 5, 8];
  test ("return a new array of that length containing the numbers of the Fibonacci", () => {
    expect(fibLength(arrInput)).toEqual(outPut)
    });
});


// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]





// b) Create the function that makes the test pass.

var output1 = [1, 1, 2, 3, 5, 8]
var outPut2 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibLength = (array) => {
return array.map(value(outPut1, outPut2))
}

}
//Couldn't remember how to write out the function for both input and outputs.



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//use filter or if the number is not divible by two with the remainder of 0

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe('oddNumbers', () => {
    test('return new array of odd numbers sorted from least to greatest', () => {
      expect([]).toEqual([''])
    })
  })

// b) Create the function that makes the test pass.

//declare function named oddNumbers
//make variable of new empty array
//declare if statement of num divided by two and not equal 0 to get the odd number.
const oddNumbers = (num) => {
    let newArr = []
    if(num % 2 !== 0 ){
        return newArr
    }
}




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function.
describe("returnSum", () => {
  let ...//i think I'm supposed to add the variables but I'm not sure how...

  // describe what the function does.
  test("returns array of the accumulating sum", () => {

    // call on the function, and check the expected output with .toEqual.
    expect(returnSum()).toEqual([2, 6, 51, 60])
    expect(returnSum()).toEqual([0, 7, -1, 11])
    expect(returnSum()).toEqual([])
  })
})
//I'm having trouble figuring out how to add all the variables into the test.
var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []





// b) Create the function that makes the test pass.

returnSum = (array) => {
  return array.map(value())
}

