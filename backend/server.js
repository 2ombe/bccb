const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(path.resolve(), "/derick/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/derick/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
