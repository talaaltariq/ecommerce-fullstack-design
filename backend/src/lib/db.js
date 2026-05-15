import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables.");
        }
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 10000,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error.message || error);
        if (error.stack) console.error('Stack:', error.stack);
    }
}