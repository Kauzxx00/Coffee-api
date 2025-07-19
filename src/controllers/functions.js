let coffees = [];

function createCoffee(req, res) {
  const data = req.body;
  if (!data || !data.name || !data.price) {
    return res.status(400).send({
      message: "Dados insuficientes, Json esperado."
    });
  }

  data.id = `${Math.trunc(Date.now()/1000)}`.slice(5, 10);
  coffees.push(data);

  res.status(201).send({
    message: "Café adicionado à lista com sucesso!"
  });
}

function printCoffee(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({
      message: "Dados insuficientes, ID esperado."
    });
  }

  const coffee = coffees.find(c => c.id === "" + id);
  if (!coffee) {
    return res.status(404).send({
      message: `Dados não encontrados com base no ID fornecido: ${id}.`
    });
  }

  res.status(200).send({
    coffee
  });
}

function editCoffee(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({
      message: "Dados insuficientes."
    });
  }

  const data = req.body;
  if (!data || !data.name || !data.price) {
    return res.status(400).send({
      message: "Dados insuficientes, Json esperado."
    });
  }
  
  const coffee = coffees.find(c => c.id === "" + id);
  if (!coffee) {
    return res.status(404).send({
      message: `Dados não encontrados com base no ID fornecido: ${id}.`
    });
  }
  
  coffee.name = data.name;
  coffee.price = data.price;
  
  res.status(200).send({
    coffee
  });
}

function deleteCoffee(req, res) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({
      message: "Dados insuficientes, ID esperado."
    });
  }

  const coffee = coffees.find(c => c.id === "" + id);
  if (!coffee) {
    return res.status(404).send({
      message: `Dados não encontrados com base no ID fornecido: ${id}.`
    });
  }
  
  const newCoffees = coffees.filter(c => c.id !== "" + id);
  coffees = newCoffees;

  res.status(200).send({
    message: "Café removido com sucesso!"
  });
}


function printCoffees(req, res) {
  res.status(200).send({
    coffees
  });
}

module.exports = {
  printCoffees,
  printCoffee,
  deleteCoffee,
  editCoffee,
  createCoffee
};