const express = require("express");
const dotenv = require("dotenv");
const chats = require("./Data/data");
const connectdb = require("./config/db");
const userrouter = require('./Routes/userRoutes')

const app = express();
dotenv.config();
connectdb()

app.use(express.json())

app.get("/", (req, res) => {
 res.send("api is running")
})

app.use('/api/user', userrouter)

const PORT = process.env.PORT || 5000 

app.listen(PORT, console.log(`server is connected on PORT ${PORT}`))