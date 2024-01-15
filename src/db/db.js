import mongoose from "mongoose";
const connection = {};

const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(`${process.env.MANGOURI}/${process.env.DBNAME}`);
        connection.isConnected = db.connection[0].readyState;
        

    } catch (error) {

        console.log("Error while connecting to DB", error);
        process.exit(1);
    }
}

export default connectDB;