const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("hello mtsahna ka malume");
});
app.listen(port, () => {
  console.log("Aweya", port);
});
