import express, { urlencoded, json } from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

import mongoose from "mongoose";


import "dotenv/config";

const app = express();

import { config } from "./src/config";
import { routes } from "./src/routes";


const PORT = process.env.PORT || 5000;

app.use(compression());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(morgan("combined"));
app.use(cors());
// Routes

routes(app);

mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.info(`connected to the database`);
  })
  .catch((e) => {
    console.log(`Not connected to database ${e}`);
  });

app.listen(PORT, () => {
  console.error(`server running on port ${PORT}`);
});
