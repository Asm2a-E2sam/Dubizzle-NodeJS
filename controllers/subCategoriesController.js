const subCat = require("./../models/subCategoriesModel");

exports.createSubCategory = async (req, res, next) => {
    try {
        const categoryId = req.body.categoryId; // Retrieve the categoryId from the request body
        const subCategoryData = {
            title: req.body.title, // Make sure to include the title
            CategoryID: categoryId,
        };

        const subCategory = await subCat.create(subCategoryData);
        res.status(201).json({
            message: "created",
            data: {
                subCategory,
            },
        });
    } catch (err) {
        res.status(400).json({
            message: "failed",
            err,
        });
    }
};


exports.getSubCategorys = async (req, res, next) => {
    try {
        const subCategorys = await subCat.find()
        res.status(200).json({
            message: "success",
            data: {
                data: subCategorys,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: "Not Found",
            err,
        });
    }
};
//.populate("CategoryID");
exports.getSubCategory = async (req, res, next) => {
    try {
        const subCategory = await subCat.findById(req.params.id)
        if (!subCategory) next(err);

        res.status(200).json({
            message: "success",
            data: {
                subCategory,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: "Not Found",
            err,
        });
    }
};
exports.updateSubCategory = async (req, res, next) => {
    try {
        const subCategory = await subCat.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            message: "success",
            data: {
                subCategory,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: "Not Found",
            err,
        });
    }
};

exports.deleteSubCategory = async (req, res, next) => {
    try {
        const subCategory = await subCat.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "success",
            data: {
                subCategory,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: "Not Found",
            err,
        });
    }
};
