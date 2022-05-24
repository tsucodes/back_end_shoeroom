import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    name: String, 
    brand: String,
    size: String,
    condition: String,
    // convert images into string using redux64
    image: String,
    sold: Boolean,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});


const ShoePost = mongoose.model('Post', PostSchema);
export default ShoePost;
