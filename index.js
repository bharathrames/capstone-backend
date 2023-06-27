const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const userrouter = require('./Routes/userRoutes');
const chatrouter = require('./Routes/chatRoutes');
const messageRoutes = require('./Routes/messageRoutes');
const { notFound, errorHandler } = require("./middlewares/error");

const app = express();
dotenv.config();
connectdb()

app.use(express.json())

app.get("/", (req, res) => {
 res.send("api is running")
})

app.use('/api/user', userrouter)
app.use('/api/chat', chatrouter)
app.use('/api/message', messageRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000 

app.listen(PORT, console.log(`server is connected on PORT ${PORT}`))