import mongoose  from "mongoose";
const productSchema = mongoose.Schema({
    id:{
        type: Number
    },
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    price:{
        type: Number
    }
})
export default mongoose.model('Product',productSchema);