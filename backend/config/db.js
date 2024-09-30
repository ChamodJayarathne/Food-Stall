import mongoose from "mongoose";

// export const connectDB = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://admin:chamod12@cluster0.bgi2jhi.mongodb.net/FoodStall"
//     )
//     .then(() => console.log("Database connected"));
// };

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://admin:Chamod12@ac-0givrkl-shard-00-00.bgi2jhi.mongodb.net:27017,ac-0givrkl-shard-00-01.bgi2jhi.mongodb.net:27017,ac-0givrkl-shard-00-02.bgi2jhi.mongodb.net:27017/FoodStall?ssl=true&replicaSet=atlas-ag2zuu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Database connected"));
};