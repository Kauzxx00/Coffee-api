const { deleteCoffee } = require("./../controllers/functions.js");

module.exports = {
  name: "delete/:id",
  method: "delete",
  run: deleteCoffee
};
