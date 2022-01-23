const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 4400;

const eligibility = require("./controller/checkEligibility.ts");
const cards = require("./data/allcards.ts");

app.use(cors());
app.use(bodyParser.json()); // application/json

app.post("/eligibility", (req, res) => {
  const user = req.body;

  const eligibleCards = eligibility(user, cards);
  res.send(eligibleCards);
});

app.get("/", (req, res) => {
  res.send("ok working");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
