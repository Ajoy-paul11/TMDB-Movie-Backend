import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js"


app.use("/api/v1/movie", movieRoutes);
app.use("/api/v1/tv", tvRoutes);


export { app };