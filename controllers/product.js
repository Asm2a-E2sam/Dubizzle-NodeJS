const productsModel = require(`../models/product`);

// add new product
var addProducts = async (req, res) => {
  try {
    var product = await productsModel.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// get all product
var getAllProducts = async (req, res) => {
  try {
    var allProducts = await productsModel.find();
    res.status(201).json(allProducts);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// Update product data
var updateProduct = async (req, res, next) => {
  var { id } = req.params;
  var {
    title,
    description,
    price,
    currency,
    images,
    condition,
    location,
    seller,
    subCategoryID,
  } = req.body;

  try {
    await productsModel.updateOne(
      { _id: id },
      { title: title , 
        description: description,  
        price: price, 
        currency: currency,
        images: images, 
        condition: condition, 
        location: location,
        seller: seller,
        subCategoryID: subCategoryID }
    );
    res.status(201).json(req.body);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

//delete product
var deleteProduct = async (req, res) => {
  var id = req.params.id;
  try {
    var deletedProduct = await productsModel.deleteOne({ _id: id });
    res.status(201).json(deletedProduct);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

///////////////// Filters /////////////////

// filter product by id
var getProductByID = async (req, res) => {
  var { id } = req.params;
  try {
    var product = await productsModel.findById({ _id: id });
    res.status(201).json(product);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter product by title
var getProductByTitle = async (req, res) => {
  var { title } = req.params;
  try {
    var product = await productsModel.find({ title: title });
    res.status(201).json(product);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter product by location
var getProductByLocation = async (req, res) => {
  var { location } = req.params;
  try {
    var products = await productsModel.find({ location: location });
    res.status(201).json(products);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter product by category id
var getProductByCategoryID = async (req, res) => {
  var { subCategoryID } = req.params;
  try {
    var products = await productsModel.find({ subCategoryID: subCategoryID });
    res.status(201).json(products);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter product by seller id
var getProductBySellerID = async (req, res) => {
  var { seller } = req.params;
  try {
    var products = await productsModel.find({ seller: seller });
    res.status(201).json(products);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter product by condition
var getProductByCondition = async (req, res) => {
  var { condition } = req.params;
  try {
    var products = await productsModel.find({ condition: condition });
    res.status(201).json(products);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter product by price
var getProductByPrice = async (req, res) => {
  var { min, max } = req.params;
  try {
    var products = await productsModel.find({
        $and: [{ price: { $gte: parseInt(min), $lte: parseInt(max) } }]
    });
    res.status(201).json(products);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

///////////////// Pagination /////////////////
var getProductsByPage = async (req, res) => {
    var { page } = req.params;
    try {
      page = parseInt(page);
      var itemsPerPage = 4;
      var skip = (page - 1) * itemsPerPage;
  
      var products = await productsModel.find().skip(skip).limit(itemsPerPage);
      res.status(200).json(products);
    } catch (err) {
      res.status(422).json({ message: err.message });
    }
};


module.exports= {
  addProducts,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductByID,
  getProductByCategoryID,
  getProductBySellerID,
  getProductByCondition,
  getProductByLocation,
  getProductByTitle,
  getProductsByPage,
  getProductByPrice
}