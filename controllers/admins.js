const adminModel = require("../models/admins");

async function createAdmin(req, res) {
  try {
    const newAdmin = await adminModel.create(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
     res.status(402).json({ message: error.message });
  }
}

async function getAllAdmins(req, res) {
  try {
    const admins = await adminModel.find();
    res.status(201).json(admins);
  } catch (error) {
     res.status(402).json({ message: error.message });
  }
}

 

async function getAdmin(req, res) {
  var id = req.params.id;
  try {
    const admin = await adminModel.findById(id);
    if (!admin) {
      throw new Error("Admin not found");
    }
      res.status(201).json(admin);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

//// router http://localhost:5555/admins/email/admin22@example.com 
async function getAdminByEmail(req, res) {
  var { email } = req.params;

  try {
    const admin = await adminModel.findOne({email: email});
    if (!admin) {
      throw new Error("Admin not found");
    }
      res.status(201).json(admin);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}



async function updateAdmin(req, res) {
  var id = req.params.id;
  var adUpdatedData = req.body;
  try {
    const updatedAdmin = await adminModel.updateOne({ _id: id }, adUpdatedData);
    res.status(201).json(updatedAdmin);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

async function deleteAdmin(req, res) {
  var id = req.params.id;
  try {
    const deletedAdmin = await adminModel.findByIdAndDelete(id);
    if (!deletedAdmin) {
      throw new Error("Admin not found");
    }
    res.status(201).json(deletedAdmin);
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
}

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin,
  getAdminByEmail,
};
