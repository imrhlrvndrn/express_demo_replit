import express from "express";

const app = express();

app.get("/greet", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName;

  return res.send("Hello " + fullName + "!");
});

app.get("/", (req, res) => {
  return res.send("Welcome to the Express Server Demo!");
});

app.listen(3000, () => {
  console.log("Express server initialized on PORT " + 3000);
});
