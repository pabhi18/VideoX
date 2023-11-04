import mongoose from "mongoose";

import {DB_NAME} from "../constants.js";

const connectionDb = async() => {
try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n mongoDB connected !!  Host DB ${connectionInstance.connection.host}`)
        
} catch (error) {
    console.log("mongodb connection failed:"  +error)    
    throw error;
}
}

export default connectionDb