import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const db = await mongoose.connect(`${process.env.MANGOURI}/${process.env.DBNAME}`);



    } catch (error) {

        console.log("Error while connecting to DB", error);
        process.exit(1);
    }
}

export default connectDB;