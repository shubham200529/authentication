// dbConfig.js or dbConfig.ts

// dbConfig.ts
import mongoose from "mongoose";

let isConnected = false; // Add a flag to prevent multiple connections

export async function connect() {
  if (isConnected) {
    return; // Avoid reconnecting if already connected
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "yourDatabaseName", // Optional: explicitly specify DB name
    });

    isConnected = true;

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error: " + err);
      process.exit(1);
    });

  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
}
