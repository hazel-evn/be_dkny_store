import mongoose, { ObjectId } from "mongoose";
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    slug:{
        type: String,
        lowercase: true,
        unique: true,
        index: true
    },
    price:{
        type: Number
    },
    desc:{
        type:  String
    },
    category:{
        type: ObjectId,
        ref:"Category"
    }
},{ timestamps: true })
export default mongoose.model('Product',productSchema);