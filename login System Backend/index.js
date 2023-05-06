import express from "express";
import cors from 'cors';
import connectToDatabase from "./db.js"
const PORT = 3002;

connectToDatabase();
const app = express();
app.use(express.json());
app.use(cors);


app.get("/", (req, res) => {
    res.send("My home");
})


app.listen(PORT, () => {
    console.log(`Server listening at port http://localhost:${PORT}`);
})