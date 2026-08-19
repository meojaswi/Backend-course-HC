import "dotenv/config";

import connectDB from "./db/index.js";
import { v2 as cloudinary } from "cloudinary";
import cloudinary from "./utils/cloudinary.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port:${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!!", err);
  });
