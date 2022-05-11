import mongoose from "mongoose";
import { config } from "../utils/constants";

export class MongoConnection {
  public static async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION);
      console.log("Database Connected!");
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  }
}
