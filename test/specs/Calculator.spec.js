const Calculator = require("../../app/Calculator");
const { expect } = require("chai");

describe("scenarios for 'add' method", function () {
  let calculator = new Calculator();
 
  it("should return sum of 2 positive numbers", function () {
    expect(calculator.add(2, 6)).to.be.equal(8);
  });
  it("should return sum of 2 positive and negative numbers", function () {
    expect(calculator.add(15, -6)).to.be.equal(9);
  });
  it("should return sum of 2 negative numbers", function () {
    expect(calculator.add(-21, -17)).to.be.equal(-38);
  });
  it("should return number if only one argument is received", function () {
    expect(calculator.add(73)).to.be.equal(73);
  });
  it("should return 0 if no arguments are received", function () {
    expect(calculator.add()).to.be.equal(0);
  });
  it("should return sum of more that 2 arguments", function () {
    expect(calculator.add(100, 123, 8, 14)).to.be.equal(245);
  });
  it("should return error if one of the arguments is a string", function () {
    expect(() => calculator.add("text")).to.throw(Error, 'One of the elements is not of type "Number"');
  });
  it("should return error if one of the arguments is an array of numbers", function () {
    expect(() => calculator.add([1, 3, 5])).to.throw(Error, 'One of the elements is not of type "Number"');
  });
});

describe("scenarios for 'multiply' method", function () {
  let calculator = new Calculator();

  it("should return multipl of 2 positive numbers", function () {
    expect(calculator.multiply(2, 6)).to.be.equal(12);
  });
  it("should return sum of 2 positive and negative numbers", function () {
    expect(calculator.multiply(15, -6)).to.be.equal(-90);
  });
  it("should return sum of 2 negative numbers", function () {
    expect(calculator.multiply(-21, -17)).to.be.equal(357);
  });
  it("should return number if only one argument is received", function () {
    expect(calculator.multiply(73)).to.be.equal(73);
  });
  it("should return 0 if one of the arguments is 0", function () {
    expect(calculator.multiply(73, 0)).to.be.equal(0);
  });
  it("should return 0 if no arguments are received", function () {
    expect(calculator.multiply()).to.be.equal(console.log("The array is empty"));
  });
  it("should return sum of more that 2 arguments", function () {
    expect(calculator.multiply(100, 123, 8, 14)).to.be.equal(1377600);
  });
  it("should return error if one of the arguments is a string", function () {
    expect(() => calculator.multiply("text")).to.throw(Error, 'One of the elements is not of type "Number"');
  });
  it("should return error if one of the arguments is an array of numbers", function () {
    expect(() => calculator.multiply([1, 3, 5])).to.throw(Error, 'One of the elements is not of type "Number"');
  });
});
