const mongoose = require(`mongoose`);
const packagesSchema = new mongoose.Schema(
    {  
      name: {
        type: String,
        required: true,
        unique: true,
      }
  },{
      timestamps: true,
    }
    );
    const packagesModel = mongoose.model(`packages`, packagesSchema);
    module.exports = packagesModel;