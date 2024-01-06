import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDatabase = async () => {
    try {
        // As we're communicating with database, so we'll use async / await
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        // console the host name so that we can know wheather it got connected or not
        console.log(`MONGODB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Mongoose connection to DB has failed: ${error}`);
        // Here we can exit by throwing error, as well as using process.exit(1)
        process.exit(1); // ####### Need to study about this exit
    }
};

export default connectToDatabase