import { connect } from 'mongoose';

const uri: string = process.env.MONGO_URI as string;

const connectDB = async () => {
  const conn = await connect(uri);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
