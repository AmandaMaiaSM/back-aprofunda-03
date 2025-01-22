import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('Connected to database!!');
    } catch(error){
        console.log('Error connecting to database', error);
    }
}