import mongoose  from "mongoose";
const dtProduct = mongoose.Schema({ id: Number, name: String })
// Khởi tạo 1 model mới
const Products = mongoose.model('Product', dtProduct);

export const getAll = async (req,res) => { // lấy ra tất cả sản phẩm
    try {
        const products = await Products.find().exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}
export const get = async (req,res) => { // get a product
    try {
        const detailProducts = await Products.findOne({_id: req.params.id}).exec();
        res.json(detailProducts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}
export const create = async (req, res) => { // thêm sản phẩm
    try {
        const product = await Products(req.body).save();
        res.json(product);    
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}
export const remove = async (req,res) => {
    try {
        const detailProducts = await Products.findOneAndDelete({_id: req.params.id}).exec();
        res.json(detailProducts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}
export const putProduct = async (req,res) => {
    console.log(req.body    );
    try {
        const detailProducts = await Products.findOneAndUpdate({_id: req.params.id},req.body,{new : true}).exec();
        res.json(detailProducts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        })
    }
}