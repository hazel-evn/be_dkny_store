import categorySchema from "../models/category";
import Product from "../models/products";

export const create = async (req,res) => {
    try {
        console.log(req.body);
        const categories = await new categorySchema(req.body).save();
        res.json(categories);
    } catch (error) {
        res.status(400).json({
                message: "Không thêm được danh mục"
        })
    }
}
export const getAll = async (req,res) => {
    try {
        const categories = await categorySchema.find().exec();
        res.json(categories);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy danh mục"
        })
    }
}
export const read = async (req,res) => {
    try {
        const category = await categorySchema.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category: category}).populate('category').exec();
        res.json({
            category, products
        });
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy danh mục"
        })
    }
}