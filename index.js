const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("worked");
});

app.listen(process.env.PORT || 3004, () =>
  console.log("listening on port 3004")
);
