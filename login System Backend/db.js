const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/loginsystem";

const connectToDatabase = () => {
    mongoose.set('strictQuery', false);
    // mongoose.connect(url).then(() => {
    //     console.log("connected to mongo successfully. ")
    // }).catch((err) => { console.log(err) })
    mongoose.connect(url, () => {
        console.log("connected to mongo successfully.")
    })

}

// eslint-disable-next-line no-undef
module.exports = connectToDatabase;


