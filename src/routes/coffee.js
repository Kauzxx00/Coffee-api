const { printCoffee } = require("./../controllers/functions.js");

module.exports = {
  name: "coffee/:id",
  method: "get",
  run: printCoffee
};