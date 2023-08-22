var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");

//middle
app.use(express.json());

// handle cors  // any domain
app.use(cors());

//  handle path

// handle not found
app.use("*", function (req, res, next) {
  res.status(404).json({ message: " 404 Not Found" });
});

// handle error
app.use(function (err, req, res, next) {
  res.status(500).json({ message: "Error :( !" });
});

//  connect to database
mongoose.connect("mongodb+src://olxdb:olxdb123456@cluster0.eyi12hi.mongodb.net/");

// port
var port = 5555;
app.listen(port, () => {
  console.log(`Server connecting on port (${port})`);
});
