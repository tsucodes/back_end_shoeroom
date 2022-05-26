import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    name: String, 
    brand: String,
    size: String,
    condition: String,
    // convert images into string using redux64
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});


const PostShoe = mongoose.model('PostShoe', PostSchema);
export default PostShoe;
