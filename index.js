const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It definitely worked, my name is Jon!");
});

app.listen(3000);
