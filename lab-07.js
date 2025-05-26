/* 
    CIT 281 Lab 7
    Author: Mikayla Gooodi 
*/

//CustomError class that inherits from Error
class CustomError extends Error {
  constructor(message) {
    super(message);
    //the class name property must be named "CustomError"
    this.name = "CustomError";
  }
}

//Function that uses throw to create a generic Error error
function throwGenericError() {
  //the custom message must be "Generic Error"
  throw new Error("Generic error");
}

//Function that uses throw to create a custom CustomError error
function throwCustomError() {
  //the custom muessafe bust be "Custom error"
  throw new CustomError("Custom error");
}

//Force a generic error using console.log
console.log("Force generic error");

//A block that forces the custom error by calling throwCustomError()
try {
  console.log("Generic error try block");
  throwGenericError();
} catch (err) {
  console.log("Generic error catch block");
  console.log(err.toString());
} finally {
  console.log("Generic error finally block");
}

//Force custom error using console.log
console.log("Force custom error");

//A block that forces the custom error by calling throwCustomError()
try {
  console.log("Custom error try block");
  throwCustomError();
} catch (err) {
  console.log(`Custom error catch block`);
  console.log(`CustomError: Custom error`);
} finally {
  console.log("Custom error finally block");
}
