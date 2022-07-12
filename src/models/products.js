import mongoose from "mongoose";
const {ObjectId} = mongoose.Types;
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
    },
},{ timestamps: true })
productSchema.index({"$**":'text'});
export default mongoose.model('Product',productSchema);