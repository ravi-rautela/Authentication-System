const express = require('express');
const cors = require('cors');
const connectToDatabase = require("./db");
const { Schema, default: mongoose } = require('mongoose');
connectToDatabase();
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json())

// 1) create user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// 2) Create Model for userschema
const User = new mongoose.model("User", userSchema);


// Create Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password == user.password) {
                res.send({message:"login success ",user: user})
            } else {
                res.send({message:"Wrong password"})
            }
        }
        else {
           res.send({message:"user not found"})
        }
    })
})

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;
    // checking user via email id
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User Created" })
        }
        else {
            const user = new User({
                name, email, password
            })
            user.save(err => {
                if (err) {
                    console.log({ Error: "error" })
                }
                else {
                    console.log({ message: "Success" })
                }
            });
        }
    })

})

app.listen(port, () => {
    console.log(`Server listening at port http://127.0.0.1:${port}`);
})

