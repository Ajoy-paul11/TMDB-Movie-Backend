import express from "express";
import cookieParser from "cookie-parser";
import { errorController } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"
import userRoutes from "./routes/user.route.js"


app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv", tvRoutes);
app.use("/api/v1/user", userRoutes);


app.use(errorController);


export { app };