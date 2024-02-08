import mongoose from 'mongoose';

export default async function conn() {
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message);
    }
}