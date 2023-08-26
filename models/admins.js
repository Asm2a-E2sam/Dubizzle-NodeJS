const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["superuser", "moderator", "admin"],
    },
   
  },
  {
    timestamps: true,
  }
);

const adminModel = mongoose.model("admins", adminSchema);
module.exports = adminModel;
