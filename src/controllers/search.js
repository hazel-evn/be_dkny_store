import Product from "../models/products";

export const search = async (req, res) => {
    try {
        const regex = new RegExp(req.params.name, 'i');
        const result = await Product.find({ name: regex }).exec();
        res.status(200).json(result)

    } catch (error) {
        res.status(400).json({
            message: "Tạch rồi"
        })
    }
}