const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { logger } = require("@kauzx/logger");

app.use(cors());
app.use(express.json());

const routes = require("./src/routes");
app.get("/", (req, res) => {
  res.send("Bem-vindo a CoffeeShop, api de estudos.");
});
app.use("/coffeeshop", routes);

app.listen(port, () => {
  logger.debug("Api ligada na porta 3000.");
});