const sayHi = require("./5-utils");
const names = require("./4-names");
const alternativeApproach = require("./6-alternativeExport");

// mind-blowing approch of the export function.
require("./7-anotherExport");

console.log(alternativeApproach);
sayHi(names.john);
