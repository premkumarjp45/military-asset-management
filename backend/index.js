import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js"
import user from "./routes/user.js"
import purchases from "./routes/purchases.js"
import transfers from "./routes/transfers.js"
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/api/user", user)
app.use("/api", purchases)
app.use("/api/trans", transfers)

app.get("/", (req, res) => {
    res.send("API WORKING")
})








const PORT = process.env.PORT || 5000;



app.listen((PORT), () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
});