const { createCoffee } = require("./../controllers/functions.js");

module.exports = {
  name: "register",
  method: "post",
  run: createCoffee
};
