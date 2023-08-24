const mongoose = require(`mongoose`);
const productsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    seller: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: `users`,
      required: true,
    },
    subCategoryID: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: `subCategories`,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const productsModel = mongoose.model(`products`, productsSchema);
module.exports = productsModel;
