const mongoose = require("mongoose")

const connectdb = async () => {

    try {
        const mongooseconnect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

          console.log(`MongoDB Connected Sucessfully: ${mongooseconnect.connection.host}`)

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();

    }
}

module.exports = connectdb;