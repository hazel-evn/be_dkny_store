import Product from "../models/products.js";
import slugify from "slugify";

export const create = async (req, res) => { // thêm sản phẩm
    req.body.slug = slugify(req.body.name);
    try {
        const product = await Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}
export const getAll = async (req, res) => { // lấy ra tất cả sản phẩm
    const perPagePre = 20;
    const perPage = req.query.perPage ? parseInt(req.query.perPage) : perPagePre;
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const skip = ( page - 1 ) * perPage;

    try {
        const products = await Promise.allSettled([
            Product.find().skip(skip).limit(perPage).exec(),
            Product.countDocuments().exec()
        ])
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}
export const get = async (req, res) => { // get a product
    try {
        const detailProducts = await Product.findOne({ _id: req.params.id }).exec();
        res.json(detailProducts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const detailProducts = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(detailProducts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}
export const putProduct = async (req, res) => {
    try {
        const detailProducts = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        res.json(detailProducts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
};

