import mongoose from "mongoose"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/test`)
        console.log(`\n MongoDB connected, Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection ERROR: ", error);
        process.exit(1)
    }
}


export default connectDB