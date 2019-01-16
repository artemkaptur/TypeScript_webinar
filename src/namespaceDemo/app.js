/// <reference path="./utility-functions.ts" />
var util = Utility.Fees;
var fee = util.calculateLateFee(10);
console.log(fee);
