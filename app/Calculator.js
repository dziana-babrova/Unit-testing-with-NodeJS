class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}

  /**
   *
   *
   * @param {Arguments} args arguments to sum up
   * @return {Number} sum of arguments
   * @memberof Calculator
   */
  add(...args) {
    let arrayOfArguments = Array.from(args);
    let sum = 0;
    if (arrayOfArguments.every((element) => typeof element === "number")) {
      arrayOfArguments.forEach((element) => (sum += element));
      return sum;
    } else {
      throw new Error(`One of the elements is not of type "Number"`);
    }
  }

  /**
   *
   *
   * @param {Arguments} args arguments to multiply
   * @return {Number} result of multiplying of arguments
   * @memberof Calculator
   */
  multiply(...args) {
    let arrayOfArguments = Array.from(args);
    let multiplying = 1;
    if (arrayOfArguments.length === 0) return console.log("The array is empty");
    if (arrayOfArguments.every((element) => typeof element === "number")) {
      arrayOfArguments.forEach((element) => (multiplying *= element));
      return multiplying;
    } else {
      throw new Error(`One of the elements is not of type "Number"`);
    }
  }
}

module.exports = Calculator;
