import mongoose from "mongoose";

const Schema =mongoose.Schema;
const userSchema = new Schema({
    Firstname: {
        type:String,
        required:true
    },
    Middlename: {
        type:String,
        required:true
    },
    Lastname: {
        type:String,
        required:true
    },
    UserID: {
        type:String,
        required:true
    },
    Gender: {
        type:String,
        required:true
    },
    Age: {
        type:Number,
        required:true
    },
    PhoneNumber: {
        type:Number,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    }
});
export default mongoose.model("User",userSchema);