const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!</h1>");
});

app.get("/about", (req, res) => {
  res.send("Hello About!!");
});

app.get("/json", (req, res) => {
  // res.send([
  //   {
  //     id: 1,
  //     name: "Nima",
  //   },
  //   {
  //     id: 2,
  //     name: "Nimahu",
  //   },
  // ]);

  res.json([
    {
      id: 1,
      name: "Nima",
    },
    {
      id: 2,
      name: "Nimahu",
    },
  ]);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
