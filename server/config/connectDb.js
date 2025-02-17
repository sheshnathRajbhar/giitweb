import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const instance = await mongoose.connect(`${process.env.MONGODB_URI}/giit`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`DB Connected!! ${instance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        // Optional: Retry logic or delay before trying again
        setTimeout(connectDb, 5000); // Retry after 5 seconds if connection fails
    }
};

export default connectDb;
