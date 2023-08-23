const mongoose = require(`mongoose`);
const favoriteSchema = new mongoose.Schema(
  {  
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: `user`,
    },
product:{
    type: mongoose.SchemaTypes.ObjectId,
      ref: `product`,
}
},{
    timestamps: true,
  }
  );

  const favoriteModel = mongoose.model(`favorites`, favoriteSchema);
  module.exports = favoriteModel;