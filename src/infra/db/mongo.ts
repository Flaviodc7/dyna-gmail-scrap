import mongoose from 'mongoose';

export const connectoToMongoDB = async () => {
  try {
    const mongo_connection_url = process.env.MONGO_CONNECTION_URL ?? '';
    const mongo_db = process.env.MONGO_DB ?? '';

    await mongoose.connect(`${mongo_connection_url}/${mongo_db}`);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log('Error connecting to MongoDB.');
    console.log(error);
  }
};
