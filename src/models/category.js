import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        minLength: 5
    }
})

export default mongoose.model("Category",categorySchema);