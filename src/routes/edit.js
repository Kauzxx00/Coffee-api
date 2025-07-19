const { editCoffee } = require("./../controllers/functions.js");

module.exports = {
  name: "edit/:id",
  method: "put",
  run: editCoffee
};
