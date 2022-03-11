const products = [
        {
            id:1,
            name: "Product 1"
        },
        {
            id:2,
            name: "Product 2"
        }
];

export const getAll = (req,res) => { // get all products
    res.json(products);
}
export const get = (req,res) => { // get a product
    const result = products.find(item => item.id === +req.params.id);
    res.json(result);
}
export const create = (req,res) => { // create product
    products.push(req.body);
    res.json(products);
}
export const remove = (req,res) => {
    const delProduct = products.filter(item => item.id !== +req.params.id);
    res.json(delProduct);
}
export const putProduct = (req,res) => {
    const putProduct = products.map(item => item.id === +req.params.id ? req.body : item);
    res.json(putProduct);
}