var express = require("express");
var app = express();
var mongoose = require("mongoose");
var cors = require("cors");
var packageRoutes = require(`./routes/packages`);
var favoriteRoutes = require(`./routes/favorites`); // error
var productsRoutes = require(`./routes/product`);
var searchHistoryRoutes = require("./routes/searchHistory");
//middle
app.use(express.json());

// handle cors  // any domain
app.use(cors());

//  handle path
app.use(`/favorites`, favoriteRoutes);
app.use(`/packages`, packageRoutes);
app.use(`/products`, productsRoutes);
app.use(`/searchHistory`, searchHistoryRoutes);

// error handle API not found
app.use("*", function (req, res, next) {
  res.status(404).json({ message: " API Not Found please, try again" });
});

//error not handle
app.use(function (err, req, res, next) {
  res.status(500).json({ message: `Error :( ! ${err.message}` });
});

// connect to database
mongoose
  .connect(
    "mongodb+srv://olxdb:olxdb123456@cluster0.eyi12hi.mongodb.net/Dubizzle"
  )
  .then(function () {
    console.log("Dubizzle db is connect");
  })
  .catch(function (err) {
    console.log(err);
  });

// port
var port = 5555;
app.listen(port, () => {
  console.log(`Server listening on port (${port})`);
});
