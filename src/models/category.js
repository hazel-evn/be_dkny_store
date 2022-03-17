import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        minLength: 5
    },
    slug:{
        type: String,
        trim: true
    }
})

export default mongoose.model("Category",categorySchema);