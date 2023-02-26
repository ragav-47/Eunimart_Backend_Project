import mongoose from "mongoose";

const Schema =mongoose.Schema;
const tweetSchema = new Schema({
    UserID: {
        type:String,
        required:true
    },
    Tweet: {
        type:String,
        required:true
    },
});
export default mongoose.model("Tweets",tweetSchema);