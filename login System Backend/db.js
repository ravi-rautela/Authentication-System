import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/loginSystem"

const connectToDatabase = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(url, () => {
        console.log("Connected...")
    })
}

// eslint-disable-next-line no-undef
module.exports = connectToDatabase;


