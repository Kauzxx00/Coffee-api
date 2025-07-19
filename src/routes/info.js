module.exports = {
  name: "/",
  method: "get",
  run: (req, res) => {
    res.send("Rotas: coffeeshop/register coffeeshop/coffees");
  }
};