const { printCoffees } = require("./../controllers/functions.js");

module.exports = {
  name: "coffees",
  method: "get",
  run: printCoffees
};